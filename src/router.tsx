import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import { RootComponent } from './routes/__root';
import { HomePage } from './routes/index';
import { AboutPage } from './routes/about';
import { ExoticMarblePage } from './routes/exotic-marble';
import { BlogPage } from './routes/blog';
import { ContactPage } from './routes/contact';
import { ProductDetailPage } from './routes/products/$slug';
import { ProductsListPage } from './routes/products/index';

// 1. Root route
export const rootRoute = createRootRoute({
  component: RootComponent,
});

// 2. Child routes
export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

export const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: ProductsListPage,
});

export const productsHtmlRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products.html',
  component: ProductsListPage,
});

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

export const aboutHtmlRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about-us.html',
  component: AboutPage,
});

export const exoticMarbleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/exotic-marble',
  component: ExoticMarblePage,
});

export const exoticMarbleHtmlRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/exotic-marble.html',
  component: ExoticMarblePage,
});

export const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogPage,
});

export const blogHtmlRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog.html',
  component: BlogPage,
});

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

export const contactHtmlRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact-us.html',
  component: ContactPage,
});

export const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products/$slug',
  component: ProductDetailPage,
});

export const productDetailHtmlRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/$slug.html',
  component: ProductDetailPage,
});

// 3. Assemble route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  productsRoute,
  productsHtmlRoute,
  aboutRoute,
  aboutHtmlRoute,
  exoticMarbleRoute,
  exoticMarbleHtmlRoute,
  blogRoute,
  blogHtmlRoute,
  contactRoute,
  contactHtmlRoute,
  productDetailRoute,
  productDetailHtmlRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
