CREATE Database ema;

USE ema;

CREATE TABLE CGenero (
  id_gen INT NOT NULL AUTO_INCREMENT,
  tipo_gen VARCHAR(45) NOT NULL,
  valida_gen BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (id_gen)
);

CREATE TABLE CInteligencia (
  id_int INT NOT NULL AUTO_INCREMENT,
  tipo_int VARCHAR(20) NOT NULL,
  valida_int BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (id_int)
);

CREATE TABLE CParcial (
  id_par INT NOT NULL AUTO_INCREMENT,
  nombre_par VARCHAR(30) NOT NULL,
  valida_par BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (id_par)
);

CREATE TABLE CRol (
  id_rol INT NOT NULL AUTO_INCREMENT,
  tipo_rol VARCHAR(20) NOT NULL,
  valida_rol BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (id_rol)
);

CREATE TABLE CSemestre (
  id_sem INT NOT NULL AUTO_INCREMENT,
  tipo_sem VARCHAR(20) NOT NULL,
  valida_sem BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (id_sem)
);

CREATE TABLE CEspecialidad (
  id_es INT NOT NULL AUTO_INCREMENT,
  nombre_es VARCHAR(45) NOT NULL,
  valida_es BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (id_es)
);

CREATE TABLE ESemEsp(
	id_semesp INT NOT NULL AUTO_INCREMENT,
  id_sem INT NOT NULL,
  id_es INT NOT NULL,
  valida_semesp BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (id_semesp),
  FOREIGN KEY (id_sem) REFERENCES CSemestre (id_sem),
  FOREIGN KEY (id_es) REFERENCES CEspecialidad (id_es)
);

CREATE TABLE CUaprendizaje (
  id_ua INT NOT NULL AUTO_INCREMENT,
  nombre_ua VARCHAR(60) NOT NULL,
  id_semesp INT NOT NULL,
  valida_ua BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (id_ua),
  FOREIGN KEY (id_semesp) REFERENCES ESemEsp (id_semesp)
);

CREATE TABLE MCicloescolar (
  id_cicloesc INT NOT NULL AUTO_INCREMENT,
  id_ae INT NOT NULL,
  id_tc INT NOT NULL,
  valida_cicloesc BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (id_cicloesc)
);

CREATE TABLE MPersona (
  id_per INT NOT NULL AUTO_INCREMENT,
  nombre_per VARCHAR(45) NOT NULL,
  appat_per VARCHAR(45) NOT NULL,
  apmat_per VARCHAR(45) NOT NULL,
  fecha_de_nacimiento_per DATE NOT NULL,
  id_gen INT NOT NULL,
  id_int INT NOT NULL,
  valida_per BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (id_per),
  FOREIGN KEY (id_gen) REFERENCES CGenero (id_gen),
  FOREIGN KEY (id_int) REFERENCES CInteligencia (id_int)
);

CREATE TABLE DUser (
  correo_user VARCHAR(45) NOT NULL,
  password_user VARCHAR(100) NOT NULL,
  id_rol INT NOT NULL,
  id_per INT NOT NULL,
  valida_user BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (correo_user),
  FOREIGN KEY (id_per) REFERENCES MPersona (id_per),
  FOREIGN KEY (id_rol) REFERENCES CRol (id_rol)
);

CREATE TABLE MAdmin (
  num_empleado INT NOT NULL AUTO_INCREMENT,
  correo_user VARCHAR(45) NOT NULL,
  valida_adm BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (num_empleado),
  FOREIGN KEY (correo_user) REFERENCES DUser (correo_user)
);

CREATE TABLE MEstudiante (
  boleta_est VARCHAR(10) NOT NULL,
  correo_user VARCHAR(45) NOT NULL,
  id_es INT NOT NULL,
  id_sem INT NOT NULL,
  valida_est BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (boleta_est),
  FOREIGN KEY (correo_user) REFERENCES DUser (correo_user),
  FOREIGN KEY (id_es) REFERENCES CEspecialidad (id_es),
  FOREIGN KEY (id_sem) REFERENCES CSemestre (id_sem)
);

CREATE TABLE DAsistente (
  id_asis INT NOT NULL AUTO_INCREMENT,
  id_cicloesc INT NOT NULL,
  correo_user INT NOT NULL,
  valida_asis BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (id_asis),
  FOREIGN KEY (id_cicloesc) REFERENCES MCicloescolar (id_cicloesc),
  FOREIGN KEY (correo_user) REFERENCES DUser (correo_user)
);

CREATE TABLE CTema (
  id_tem INT NOT NULL AUTO_INCREMENT,
  nombre_tem VARCHAR(150) NOT NULL,
  id_par INT NOT NULL,
  id_ua INT NOT NULL,
  valida_tem BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (id_tem),
  FOREIGN KEY (id_par) REFERENCES CParcial (id_par),
  FOREIGN KEY (id_ua) REFERENCES CUaprendizaje (id_ua)
);

CREATE TABLE CSubtema (
  id_sub INT NOT NULL AUTO_INCREMENT,
  nombre_sub VARCHAR(150) NOT NULL,
  id_tem INT NOT NULL,
  valida_sub BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (id_sub),
  FOREIGN KEY (id_tem) REFERENCES CTema (id_tem)
);

CREATE TABLE MTarea (
  id_tarea INT NOT NULL AUTO_INCREMENT,
  nombre_tarea VARCHAR(50) NOT NULL,
  cal_tarea INT NOT NULL,
  id_sub INT NOT NULL,
  id_asis INT NOT NULL,
  valida_tarea BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (id_tarea),
  FOREIGN KEY (id_sub) REFERENCES CSubtema (id_sub),
  FOREIGN KEY (id_asis) REFERENCES DAsistente (id_asis)
);

CREATE TABLE MMaterial (
  id_mat INT NOT NULL AUTO_INCREMENT,
  url_mat VARCHAR(256) NOT NULL,
  id_sub INT NOT NULL,
  valida_mat BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (id_mat),
  FOREIGN KEY (id_sub) REFERENCES CSubtema (id_sub)
);

INSERT INTO
  CGenero
values
  (1, 'Masculino', 1),
  (2, 'Femenino', 1),
  (3, 'Prefiero no decirlo', 1);

INSERT INTO
  CInteligencia
values
  (1, 'Visual', 1),
  (2, 'Auditivo', 1),
  (3, 'Kinéstesico', 1),
  (4, 'Leer y Escribir', 1);

INSERT INTO
  CRol
values
  (1, 'Administrador', 1),
  (2, 'Estudiante', 1);

INSERT INTO
  CSemestre
values
  (1, 'Primero', 1),
  (2, 'Segundo', 1),
  (3, 'Tercero', 1),
  (4, 'Cuarto', 1),
  (5, 'Quinto', 1),
  (6, 'Sexto', 1);

INSERT INTO
  CEspecialidad 
values
  (1, 'Tronco común', 1),
  (2, 'Programación', 1),
  (3, 'Sistemas Digitales', 1),
  (4, 'Máquinas con Sistemas Automatizados', 1),
  (5, 'Mecatrónica', 1);

INSERT INTO
	ESemEsp 
values
	(1, 1, 1, 1),
  (2, 2, 1, 1),
  (3, 3, 1, 1),
  (4, 4, 1, 1),
  (5, 5, 1, 1),
  (6, 6, 1, 1),
  (7, 3, 2, 1),
  (8, 3, 3, 1),
  (9, 3, 4, 1),
  (10, 3, 5, 1),
  (11, 4, 2, 1),
  (12, 4, 3, 1),
  (13, 4, 4, 1),
  (14, 4, 5, 1),
  (15, 5, 2, 1),
  (16, 5, 3, 1),
  (17, 5, 4, 1),
  (18, 5, 5, 1),
  (19, 6, 2, 1),
  (20, 6, 3, 1),
  (21, 6, 4, 1),
  (22, 6, 5, 1);
    
INSERT INTO
  CUAprendizaje  
values
  (1, 'Cálculo Diferencial', 4, 1),
  (2, 'Física II', 4, 1),
  (3, 'Química II', 4, 1),
  (4, 'Dibujo Técnico II', 4, 1),
  (5, 'Inglés IV', 4, 1),
  (6, 'Programación y Servicios Web', 11, 1),
  (7, 'Lab. de Proy. de Tecnologías de la Infor. II', 11, 1),
  (8, 'Bases de Datos', 11, 1),
  (9, 'Téc. de Programación Personal con Calidad', 11, 1);

INSERT INTO
  CParcial
values
  (1, 'Primero', 1),
  (2, 'Segundo', 1),
  (3, 'Tercero', 1);

INSERT INTO
  CTema
values
  (1, 'Funciones', 1, 1, 1),
  (2, 'Limites', 1, 1, 1),
  (3, 'Continuidad', 2, 1, 1),
  (4, 'Problemas referentes a la derivada de funciones algebraicas', 2, 1, 1),
  (5, 'Problemas referente a la derivada de funciones trascendentes y el uso diferencial', 3, 1, 1),
  (6, 'Leyes y principios de la Dinamíca', 1, 2, 1),
  (7,'Problemas de la mecánica y la aplicacion de sus principios en solidos', 2, 2, 1),
  (8, 'Leyes de la termodinamica en situaciones de fenomenos tecnologicos y sociales', 3, 2, 1),
  (9, 'Balanceo de ecuaciones químicas', 1, 3, 1),
  (10, 'Estequiometría', 1, 3, 1),
  (11, 'Estructura de Compuestos Orgánicos', 2, 3, 1),
  (12, 'Nomenclatura y Aplicacion de Compuestos Orgánicos', 3, 3, 1),
  (13, 'Representacion de formas de un objeto bidimencionalmente y en isométrico', 1, 4, 1),
  (14, 'Representacion de vistas e isométrico de un objeto mostrando la estructura interna y externa', 2, 4, 1),
  (15, 'Desarrollo de modelos bidimensionales o tridimensionales de acuerdo a especificaciones', 3, 4, 1),
  (16, 'Uso de tiempos gramaticales para comunicar preferencias y experiencias sobre actividades deportivas', 1, 5, 1),
  (17, 'Enunciados condicionales 0, 1 y 2 para referirse a la prevencion de las causas de desastres naturales', 1, 5, 1),
  (18, 'Uso de los tiempos pasado simple y pasado perfecto para narrar hechos acontecidos en diversos ambitos', 2, 5, 1),
  (19, 'Uso de la voz pasiva y los enunciados imperativos para referirse a inventos y descubrimientos', 3, 5, 1),
  (20, 'Protocolos de comunicacion en la arquitectura de internet para el desarrollo web', 1, 6, 1),
  (21, 'Aplicacion de diferentes herramientas y lenguajes de programacion para el desarrollo de aplicaciones', 2, 6, 1),
  (22, 'Contextualiza los protocolos y estándares de los servicios Web', 2, 6, 1),
  (23, 'Aplicacion de los conceptos fundamentales a niveles de seguridad de los Servicios Web', 3, 6, 1),
  (24, 'Diseño de Bases de Datos normalizadas aplicando el modelado de datos Entidad Relacion y Relacional', 1, 8, 1),
  (25, 'Uso de gestores y lenguajes de bases de datos para la manipulacion de la informacion de Bases de Datos', 2,  8, 1),
  (26, 'Aplicacion de proteccion a las bases de datos para su confidencialidad, disponibilidad e inseguridad', 3, 8 , 1),
  (27, 'Explica las actividades de la administracion de la calidad del sofware', 1, 9 , 1),
  (28, 'Aplicacion de metodos de administracion de tiempo de la calidad del software', 1, 9 , 1),
  (29, 'Evalua la calidad del producto de software por la elaboracion de los planes del proyecto', 2, 9, 1),
  (30, 'Planeacion estrategica del proyecto de desarrollo de Software', 2, 7, 1),
  (31, 'Realiza la ejecucion del proyecto de desarrollo de software con la planeacion', 2, 7, 1),
  (32, 'Implementacion del plan de mejora del proyecto con base a su ejecucion', 3, 7, 1),
  (33, 'Sustenta el impacto que tiene el proyecto para la industria', 3, 7, 1);

INSERT INTO
  CSubtema
values
  (1, 'Tabla de valores.', 1, 1),
  (2, 'Dominio y rango', 1, 1),
  (3, 'Notacion y Evaluacion de una funcion', 1, 1),
  (4, 'Funcion Inversa', 1, 1),
  (5, 'Dominio y Rango en Notación de Conjunto por Descripción, Intervalo y Representación Gráfica.', 1, 1),
  (6, 'Modelos matemáticos.', 1, 1),
  (7, 'Funciones: polinomiales, racionales y trascendentes.', 1, 1),
  (8, 'Operaciones de funciones: suma, resta, multiplicación y división', 1, 1),
  (9, 'Concepto de límite de una función e introducción de su notación', 2, 1),
  (10, 'Continuidad de una función en un punto y en unintervalo', 2, 1),
  (11, 'Tipos de discontinuidad (evitable e inevitable)', 2, 1),
  (12, 'Cálculo de las discontinuidades en funciones racionales.', 2, 1),
  (13, 'Cálculo de límites (uso de teoremas y criterios de continuidad)', 2, 1),
  (14, 'Cálculo de derivadas de funciones algebraicas por reglas basicas de derivadas', 2, 1),
  (15, 'Regla de la cadena', 3, 1),
  (16, 'Derivada de función inversa y derivación implícita', 3, 1),
  (17, 'Derivadas sucesivas', 3, 1),
  (18, 'Cálculo de derivadas de funciones exponenciales y logarítmicas', 4, 1),
  (19, 'Cálculo de derivadas de funciones trigonométricas e inversas trigonométricas', 4, 1),
  (20, 'Función creciente y decreciente', 5, 1),
  (21, 'Signo de la primera derivada', 5, 1),
  (22, 'carácter creciente y decreciente', 5, 1),
  (23, 'Máximos y mínimos relativos', 5, 1),
  (24, 'Sentido de concavidad de la gráfica de una función', 5, 1),
  (25, 'Signo de la segunda derivada', 5, 1),
  (26, 'Carácter de la concavidad de la gráfica de una función', 5, 1),
  (27, 'Puntos de inflexión.', 5, 1),
  (28, 'Máximo y mínimo absolutos de una función en un intervalo', 5, 1),
  (29, 'Problemas de máximos y mínimos', 5, 1),
  (30, 'Pendiente, ecuaciones de recta tangente y normal, ángulo entre curvas y rapidez', 5, 1),
  (31, 'Primera ley de Newton', 6, 1),
  (32, 'Segunda ley de Newton', 6, 1),
  (33, 'Tercera ley de Newton', 6, 1),
  (34, 'Fuerza de friccion', 6, 1),
  (35, 'Explicacion M.C.U', 7, 1),
  (36, 'Explicacion M.C.V', 7, 1),
  (37, 'Ley de gravitacion universal', 7, 1),
  (38, 'Enunciado de la ley de Gravitación Universal', 7, 1),
  (39, 'Producto Punto o Producto Escalar entre Vectores', 7, 1),
  (40, 'Fuerza constante', 8, 1),
  (41, 'fuerza cinetica', 8, 1),
  (42, 'Trabajo neto', 8, 1),
  (43, 'Reacciones Quimicas Inorganicas', 9, 1),
  (44, 'Balanceo de Ecuaciones Quimicas', 9, 1),
  (45, 'Estequiometria (Unidades Quimicas)', 10, 1),
  (46, 'Estequiometria II', 10, 1),
  (47, 'Estructura de Compuestos Organicos', 10, 1),
  (48, 'Nomenclatura de Hidrocarburos', 11, 1),
  (49, 'Nomenclatura de Funciones Quimicas Organicas ', 12, 1),
  (50, 'Present Perfect Tense', 16, 1),
  (51, 'Verbs Forms', 16, 1),
  (52, 'Future Tenses', 16, 1),
  (53, 'Too/Enough', 16, 1),
  (54, 'Passive Voice', 17, 1),
  (55, 'Modal verbs', 17, 1),
  (56, 'Zero conditional', 18, 1),
  (57, 'Conditional 1', 18, 1),
  (58, 'Neither, either, so, to', 19, 1),
  (59, 'Sistemas de proyeccion ortogonal', 13, 1),
  (60, 'Vistas principales y auxiliares en los sistemas Americano y Europeo', 13, 1),
  (61, 'Trazar isometricos a partir de vistas principales en sistema Americano y Europeo', 13, 1),
  (62, 'Describe cortes y secciones', 14, 1),
  (63, 'Representa cortes y secciones en vistas e isometrico', 14, 1),
  (64, 'Traza modelos especificos mediante los diferentes metodos de dibujo', 14, 1),
  (65, 'Representa graficamente la etructura interna y externa de modelos especificos', 14, 1),
  (66, 'Antecedentes del internet', 20, 1),
  (67, 'Modelo cliente-servidor', 20, 1),
  (68, 'Arquitectura del internet', 20, 1),
  (69, 'HTML', 21, 1),
  (70, 'CSS y JavaScript', 21, 1),
  (71, 'Modelo vista-controlador', 21, 1),
  (72, 'Servidoers web', 22, 1),
  (73, 'JSP y parametros', 22, 1),
  (74, 'Sesiones y cookies', 23, 1),
  (75, 'Conexion con BD y servicios', 23, 1),
  (76, 'Servicios web', 23, 1),
  (77, 'Microservicios', 23, 1),
  (78, 'Fundamentos de bases de datos', 24, 1),
  (79, 'Modelos de datos utilizados para el diseño de bases de datos', 24, 1),
  (80, 'Base de datos normalizados', 24, 1),
  (81, 'Gestores de bases de datos', 25, 1),
  (82, 'Lenguajes de acceso para la manipulacion de bases de datos', 25, 1),
  (83, 'Proteccion al acceso de datos', 26, 1),
  (84, 'Transacciones para asegurar la utenticidad de la informacion', 26, 1),
  (85, '¿Que es un proyecto?', 30, 1),
  (86, 'Estudio de factibilidad', 30, 1),
  (87, 'Grafica de Gantt', 30, 1),
  (88, 'Requerimientos', 30, 1),
  (89, 'Casos de uso y Específicacion de usos', 31, 1),
  (90, 'Wireframes y Mapas de navegacion', 31, 1),
  (91, 'Maquetacion', 31, 1),
  (92, 'Modelo Entidad-Relacion', 32, 1),
  (93, 'Modelado del sistema', 32, 1),
  (94, 'Diagrama de actividades', 32, 1),
  (95, 'Tipos de pruebas', 33, 1),
  (96, 'Entrega del Proyecto', 33, 1),
  (97, 'Operadores aritmeticos, relacionales, de asignacion, logicos, a nivel Bits', 1, 1),
  (98, 'Tipos de datos', 27, 1),
  (99, 'Listas', 27, 1),
  (100, 'Tuplas', 27, 1),
  (101, 'Diccionarios', 27, 1),
  (102, 'Conjuntos', 27, 1),
  (103, 'Entrada de flujo', 27, 1),
  (104, 'Salida de flujo', 27, 1),
  (105, 'Condicional if', 27, 1),
  (106, 'If simple', 27, 1),
  (107, 'If-else', 27, 1),
  (108, 'If-elif-else', 27, 1),
  (109, 'For', 27, 1),
  (110, 'While', 27, 1),
  (111, 'Sentencia Break', 27, 1),
  (112, 'Sentencia Continue', 27, 1),
  (113, 'Sentencia Pass', 27, 1),
  (114, 'Funciones', 27, 1),
  (115, 'Funciones con retorno', 27, 1),
  (116, 'Ambito de la variable', 27, 1),
  (117, 'Parametros en una funcion', 27, 1),
  (118, 'Parametros por omision, arbitrarios,', 27, 1),
  (119, 'Desempaquetado de parametros', 27, 1),
  (120, 'Recursividad', 27, 1),
  (121, 'Lambda', 27, 1),
  (122, 'Map', 27, 1),
  (123, 'Reduce', 27, 1),
  (124, 'Filter', 27, 1),
  (125, 'Zip', 27, 1),
  (126, 'Clase', 28, 1),
  (127, '__init__', 28, 1),
  (128, 'Instancia de una clase', 28, 1),
  (129, 'Herencia', 28, 1),
  (130, 'Herencia multiple', 28, 1),
  (131, 'Abstraccion', 28, 1),
  (132, 'Encapsulamiento', 28, 1),
  (133, 'Polimorfismo', 28, 1),
  (134, 'Modulos', 28, 1),
  (135, 'Funcior dir()', 28, 1),
  (136, 'Paquetes', 28, 1),
  (137, 'PyPI', 28, 1),
  (138, 'Tkinter', 28, 1),
  (139, 'Ficheros', 29, 1),
  (140, 'Apertura de ficheros', 29, 1),
  (141, 'Modo _apertura de ficheros, ficheros binarios', 29 , 1),
  (142, 'Metodo para ficheros de texto, ficheros binarios', 29, 1),
  (143, 'Serializacion y deserializacion', 29, 1),
  (144, 'Excepciones', 29, 1),
  (145, 'Data science', 29, 1),
  (146, 'Arreglos con NumPy', 29, 1),
  (147, 'Seleccion, edicion de array unidimensionales', 29, 1),
  (148, 'Uso de rangos', 29, 1),
  (149, 'Copia de un array', 29, 1),
  (150, 'Atributo shape', 29, 1),
  (151, 'Funcion reshape', 29, 1),
  (152, 'Metodo flatten', 29, 1),
  (153, 'Funcion sort', 29, 1),
  (154, 'Arreglos especiales', 29, 1),
  (155, 'Matplotlib', 29, 1),
  (156, 'Funcion plot', 29, 1),
  (157, 'Funcion show', 29, 1),
  (158, 'Funcion subplot2grid', 29, 1),
  (159, 'Pandas', 29, 1),
  (160, 'Dataframes', 29, 1),
  (161, 'Creaciones de series', 29, 1),
  (162, 'Creacion de Dataframes', 29, 1),
  (163, 'Inspeccion de series y dataframes', 29, 1),
  (164, 'Metodo head, tail, sample, describe', 29, 1),
  (165, 'Leer archivos CSV', 29, 1),
  (166, 'Estadistica', 29, 1),
  (167, 'Conceptos Basicos de estadistica', 29, 1),
  (168, 'Poblacion', 29, 1),
  (169, 'Muestra', 29, 1),
  (170, 'Tablas de distribucion de frecuencias', 29, 1),
  (171, 'Medidas de tendencia central', 29, 1),
  (172, 'Medida muestral, ponderada', 29, 1),
  (173, 'Moda', 29, 1),
  (174, 'Mediana', 29, 1),
  (175, 'Medidas de variabilidad o dispersion', 29, 1),
  (176, 'Rango', 29, 1),
  (177, 'Desviacion media', 29, 1),
  (178, 'Varianza y desviacion estandar', 29, 1);

INSERT INTO mmaterial (id_mat, url_mat, id_sub, valida_mat) VALUES 
(1,'https://www.monografias.com/trabajos-pdf4/dominio-y-rango-funcion/dominio-y-rango-funcion.pdf', 1 , 1),
(2,'http://docs.uprb.edu/deptmate/material%20suplementario/CIME/10mo%20a%2012mo/T4%3B%20Funciones%20y%20sus%20Propiedades%2810mo%20a%2012mo%29.pdf', 2, 1),
(3,'http://www0.unsl.edu.ar/~calculo1/teorias/capitulo4A4.pdf', 2, 1),
(4,'http://www.unl.edu.ar/ingreso/cursos/matematica/wp-content/uploads/sites/7/2017/07/M%25C3%25B3dulo-7-Funciones-polinomiales.pdf', 2, 1),
(5,'https://personales.unican.es/alvareze/CalculoWeb/CalculoI/matex/funcion2.pdf', 2, 1),
(6,'https://www.mat.uson.mx/~jldiaz/Documents/Funcion/3-funciones-operaciones-jl.pdf', 3, 1),
(7,'https://www.matematicasonline.es/pdf/Temas/1BachCT/Limite%20de%20una%20funcion.pdf', 3, 1),
(8,'https://www.matematicasonline.es/pdf/Temas/1BachCT/Continuidad.pdf', 3, 1),
(9,'https://www.losagustinos.es/wp-content/uploads/2018/11/Continuidad.-Teor%C3%ADa.pdf', 4, 1),
(10,'http://matematicas.uis.edu.co/jccarril/Cursos/C1/slides-ln-c1/C1-LN-Cap2-S4.pdf', 4, 1),
(11,'https://www.matematicasonline.es/pdf/Temas/2BachCT/Calculo%20de%20derivadas.pdf', 4, 1);