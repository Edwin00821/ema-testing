// middleware.ts
import type { NextRequest } from 'next/server';
import { NextFetchEvent, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // const { method, nextUrl } = request;
  // const { pathname } = nextUrl;

  // console.log({ method, pathname });

  // const jwt = request.cookies.get('Authorization');
  // console.log({ jwt });

  // // Se protegen las rutas para que los usuarios no logueados las puedan consular
  // if (pathname.startsWith('/api/ema') && jwt === undefined) {
  //   const baseURL = '/api/ema/V1';
  //   if (
  //     method === 'GET' &&
  //     (pathname === `${baseURL}/Especialidad` ||
  //       pathname === `${baseURL}/Genero` ||
  //       pathname === `${baseURL}/Inteligencia` ||
  //       pathname === `${baseURL}/Semestre`)
  //   ) {
  //     return NextResponse.next();
  //   }
  //   console.log(
  //     '------------------------No autorizado------------------------'
  //   );

  //   return NextResponse.redirect(new URL('/api/Unauthorized', request.url));
  // }

  // // Se protegen las rutas para que solo los usuarios logeados las puedan consultar

  // //Si no te haz logueado te regresa a la pagina principal

  // if (!jwt) return NextResponse.redirect(new URL('/', request.url));

  // try {
  //   //Obtenemos el payload del token
  //   const { payload } = await jwtVerify(
  //     jwt,
  //     new TextEncoder().encode(process.env.JWT_SECRET_SEED)
  //   );

  //   console.log({ payload });

  //   //Obtenemos los datos que nos interesan de la sesion
  //   const { rol: id_rol } = payload;

  //   if (pathname.startsWith('/api/ema')) {
  //     console.log('------------------------Api page------------------------');

  //     //Se protegen las rutas para que solo los usuarios con el rol de administrador puedan consultarlas
  //     if (id_rol !== 1 && method !== 'GET')
  //       return NextResponse.redirect(new URL('/api/Unauthorized', request.url));
  //     return NextResponse.next();
  //   }
  //   console.log({ payload });

  //   //Si no se cumple ninguna de las condiciones anteriores continua tu comportamiento por defecto
  //   return NextResponse.next();
  // } catch (error) {
  //   console.log({ error });
  //   return NextResponse.redirect(new URL('/', request.url));
  // }
}

// export async function middleware(request: NextRequest, event: NextFetchEvent) {
//   const { method, nextUrl, url } = request;
//   const { pathname } = nextUrl;
//   const jwt = request.cookies.get('Authorization');
//   if (!jwt) return NextResponse.redirect(new URL('/', request.url));

//   console.log({ jwt });
//   console.log(url);

//   if (pathname.startsWith('/api/ema')) {
//     console.log('------------------------Api page------------------------');
//     return NextResponse.redirect(new URL('/api/Unauthorized', url));
//   }
//   if (pathname.startsWith('/student')) {
//     console.log('------------------------Student page------------------------');
//     if (!jwt) return NextResponse.redirect(new URL('/', request.url));
//     return NextResponse.next();
//   }
//   if (pathname.startsWith('/admin')) {
//     console.log('------------------------Admin page------------------------');
//     return NextResponse.redirect(new URL('/', url));
//   }
//   return NextResponse.next();
// }

// See "Matching Paths" below to learn more
// export const config = {
//   //'/api/ema/:path*'
//   matcher: ['/ejemplo/:path*', '/adm/:path*'],
// };
