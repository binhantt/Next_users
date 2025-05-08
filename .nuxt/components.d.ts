
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'FooterBottomBar': typeof import("../components/Footer/BottomBar.vue")['default']
    'FooterBrandSection': typeof import("../components/Footer/BrandSection.vue")['default']
    'FooterContactInfo': typeof import("../components/Footer/ContactInfo.vue")['default']
    'FooterQuickLinks': typeof import("../components/Footer/QuickLinks.vue")['default']
    'FooterSocialMedia': typeof import("../components/Footer/SocialMedia.vue")['default']
    'LayoutFooter': typeof import("../components/Layout/Footer.vue")['default']
    'LayoutMainLayout': typeof import("../components/Layout/MainLayout.vue")['default']
    'LayoutNavbar': typeof import("../components/Layout/Navbar.vue")['default']
    'NabarLogo': typeof import("../components/Nabar/Logo.vue")['default']
    'NabarMainMenu': typeof import("../components/Nabar/MainMenu.vue")['default']
    'NabarMobileMenu': typeof import("../components/Nabar/MobileMenu.vue")['default']
    'NabarSearchAndIcons': typeof import("../components/Nabar/SearchAndIcons.vue")['default']
    'ProductDetailProductDetails': typeof import("../components/ProductDetail/ProductDetails.vue")['default']
    'ProductDetailProductHeader': typeof import("../components/ProductDetail/ProductHeader.vue")['default']
    'ProductDetailProductReviews': typeof import("../components/ProductDetail/ProductReviews.vue")['default']
    'ProfileAccountInfo': typeof import("../components/Profile/ProfileAccountInfo.vue")['default']
    'ProfileHeader': typeof import("../components/Profile/ProfileHeader.vue")['default']
    'ProfileOrders': typeof import("../components/Profile/ProfileOrders.vue")['default']
    'ProfileWishlist': typeof import("../components/Profile/ProfileWishlist.vue")['default']
    'RegisterStep1': typeof import("../components/Register/RegisterStep1.vue")['default']
    'RegisterStep2': typeof import("../components/Register/RegisterStep2.vue")['default']
    'HomeBestSellers': typeof import("../components/home/BestSellers.vue")['default']
    'HomeHero': typeof import("../components/home/Hero.vue")['default']
    'HomeHotDeals': typeof import("../components/home/HotDeals.vue")['default']
    'HomeProductCategories': typeof import("../components/home/ProductCategories.vue")['default']
    'HomeProductList': typeof import("../components/home/ProductList.vue")['default']
    'ProductsProductContent': typeof import("../components/products/ProductContent.vue")['default']
    'ProductsProductError': typeof import("../components/products/ProductError.vue")['default']
    'ProductsProductGallery': typeof import("../components/products/ProductGallery.vue")['default']
    'ProductsProductInfo': typeof import("../components/products/ProductInfo.vue")['default']
    'ProductsProductLoading': typeof import("../components/products/ProductLoading.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyFooterBottomBar': LazyComponent<typeof import("../components/Footer/BottomBar.vue")['default']>
    'LazyFooterBrandSection': LazyComponent<typeof import("../components/Footer/BrandSection.vue")['default']>
    'LazyFooterContactInfo': LazyComponent<typeof import("../components/Footer/ContactInfo.vue")['default']>
    'LazyFooterQuickLinks': LazyComponent<typeof import("../components/Footer/QuickLinks.vue")['default']>
    'LazyFooterSocialMedia': LazyComponent<typeof import("../components/Footer/SocialMedia.vue")['default']>
    'LazyLayoutFooter': LazyComponent<typeof import("../components/Layout/Footer.vue")['default']>
    'LazyLayoutMainLayout': LazyComponent<typeof import("../components/Layout/MainLayout.vue")['default']>
    'LazyLayoutNavbar': LazyComponent<typeof import("../components/Layout/Navbar.vue")['default']>
    'LazyNabarLogo': LazyComponent<typeof import("../components/Nabar/Logo.vue")['default']>
    'LazyNabarMainMenu': LazyComponent<typeof import("../components/Nabar/MainMenu.vue")['default']>
    'LazyNabarMobileMenu': LazyComponent<typeof import("../components/Nabar/MobileMenu.vue")['default']>
    'LazyNabarSearchAndIcons': LazyComponent<typeof import("../components/Nabar/SearchAndIcons.vue")['default']>
    'LazyProductDetailProductDetails': LazyComponent<typeof import("../components/ProductDetail/ProductDetails.vue")['default']>
    'LazyProductDetailProductHeader': LazyComponent<typeof import("../components/ProductDetail/ProductHeader.vue")['default']>
    'LazyProductDetailProductReviews': LazyComponent<typeof import("../components/ProductDetail/ProductReviews.vue")['default']>
    'LazyProfileAccountInfo': LazyComponent<typeof import("../components/Profile/ProfileAccountInfo.vue")['default']>
    'LazyProfileHeader': LazyComponent<typeof import("../components/Profile/ProfileHeader.vue")['default']>
    'LazyProfileOrders': LazyComponent<typeof import("../components/Profile/ProfileOrders.vue")['default']>
    'LazyProfileWishlist': LazyComponent<typeof import("../components/Profile/ProfileWishlist.vue")['default']>
    'LazyRegisterStep1': LazyComponent<typeof import("../components/Register/RegisterStep1.vue")['default']>
    'LazyRegisterStep2': LazyComponent<typeof import("../components/Register/RegisterStep2.vue")['default']>
    'LazyHomeBestSellers': LazyComponent<typeof import("../components/home/BestSellers.vue")['default']>
    'LazyHomeHero': LazyComponent<typeof import("../components/home/Hero.vue")['default']>
    'LazyHomeHotDeals': LazyComponent<typeof import("../components/home/HotDeals.vue")['default']>
    'LazyHomeProductCategories': LazyComponent<typeof import("../components/home/ProductCategories.vue")['default']>
    'LazyHomeProductList': LazyComponent<typeof import("../components/home/ProductList.vue")['default']>
    'LazyProductsProductContent': LazyComponent<typeof import("../components/products/ProductContent.vue")['default']>
    'LazyProductsProductError': LazyComponent<typeof import("../components/products/ProductError.vue")['default']>
    'LazyProductsProductGallery': LazyComponent<typeof import("../components/products/ProductGallery.vue")['default']>
    'LazyProductsProductInfo': LazyComponent<typeof import("../components/products/ProductInfo.vue")['default']>
    'LazyProductsProductLoading': LazyComponent<typeof import("../components/products/ProductLoading.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const FooterBottomBar: typeof import("../components/Footer/BottomBar.vue")['default']
export const FooterBrandSection: typeof import("../components/Footer/BrandSection.vue")['default']
export const FooterContactInfo: typeof import("../components/Footer/ContactInfo.vue")['default']
export const FooterQuickLinks: typeof import("../components/Footer/QuickLinks.vue")['default']
export const FooterSocialMedia: typeof import("../components/Footer/SocialMedia.vue")['default']
export const LayoutFooter: typeof import("../components/Layout/Footer.vue")['default']
export const LayoutMainLayout: typeof import("../components/Layout/MainLayout.vue")['default']
export const LayoutNavbar: typeof import("../components/Layout/Navbar.vue")['default']
export const NabarLogo: typeof import("../components/Nabar/Logo.vue")['default']
export const NabarMainMenu: typeof import("../components/Nabar/MainMenu.vue")['default']
export const NabarMobileMenu: typeof import("../components/Nabar/MobileMenu.vue")['default']
export const NabarSearchAndIcons: typeof import("../components/Nabar/SearchAndIcons.vue")['default']
export const ProductDetailProductDetails: typeof import("../components/ProductDetail/ProductDetails.vue")['default']
export const ProductDetailProductHeader: typeof import("../components/ProductDetail/ProductHeader.vue")['default']
export const ProductDetailProductReviews: typeof import("../components/ProductDetail/ProductReviews.vue")['default']
export const ProfileAccountInfo: typeof import("../components/Profile/ProfileAccountInfo.vue")['default']
export const ProfileHeader: typeof import("../components/Profile/ProfileHeader.vue")['default']
export const ProfileOrders: typeof import("../components/Profile/ProfileOrders.vue")['default']
export const ProfileWishlist: typeof import("../components/Profile/ProfileWishlist.vue")['default']
export const RegisterStep1: typeof import("../components/Register/RegisterStep1.vue")['default']
export const RegisterStep2: typeof import("../components/Register/RegisterStep2.vue")['default']
export const HomeBestSellers: typeof import("../components/home/BestSellers.vue")['default']
export const HomeHero: typeof import("../components/home/Hero.vue")['default']
export const HomeHotDeals: typeof import("../components/home/HotDeals.vue")['default']
export const HomeProductCategories: typeof import("../components/home/ProductCategories.vue")['default']
export const HomeProductList: typeof import("../components/home/ProductList.vue")['default']
export const ProductsProductContent: typeof import("../components/products/ProductContent.vue")['default']
export const ProductsProductError: typeof import("../components/products/ProductError.vue")['default']
export const ProductsProductGallery: typeof import("../components/products/ProductGallery.vue")['default']
export const ProductsProductInfo: typeof import("../components/products/ProductInfo.vue")['default']
export const ProductsProductLoading: typeof import("../components/products/ProductLoading.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyFooterBottomBar: LazyComponent<typeof import("../components/Footer/BottomBar.vue")['default']>
export const LazyFooterBrandSection: LazyComponent<typeof import("../components/Footer/BrandSection.vue")['default']>
export const LazyFooterContactInfo: LazyComponent<typeof import("../components/Footer/ContactInfo.vue")['default']>
export const LazyFooterQuickLinks: LazyComponent<typeof import("../components/Footer/QuickLinks.vue")['default']>
export const LazyFooterSocialMedia: LazyComponent<typeof import("../components/Footer/SocialMedia.vue")['default']>
export const LazyLayoutFooter: LazyComponent<typeof import("../components/Layout/Footer.vue")['default']>
export const LazyLayoutMainLayout: LazyComponent<typeof import("../components/Layout/MainLayout.vue")['default']>
export const LazyLayoutNavbar: LazyComponent<typeof import("../components/Layout/Navbar.vue")['default']>
export const LazyNabarLogo: LazyComponent<typeof import("../components/Nabar/Logo.vue")['default']>
export const LazyNabarMainMenu: LazyComponent<typeof import("../components/Nabar/MainMenu.vue")['default']>
export const LazyNabarMobileMenu: LazyComponent<typeof import("../components/Nabar/MobileMenu.vue")['default']>
export const LazyNabarSearchAndIcons: LazyComponent<typeof import("../components/Nabar/SearchAndIcons.vue")['default']>
export const LazyProductDetailProductDetails: LazyComponent<typeof import("../components/ProductDetail/ProductDetails.vue")['default']>
export const LazyProductDetailProductHeader: LazyComponent<typeof import("../components/ProductDetail/ProductHeader.vue")['default']>
export const LazyProductDetailProductReviews: LazyComponent<typeof import("../components/ProductDetail/ProductReviews.vue")['default']>
export const LazyProfileAccountInfo: LazyComponent<typeof import("../components/Profile/ProfileAccountInfo.vue")['default']>
export const LazyProfileHeader: LazyComponent<typeof import("../components/Profile/ProfileHeader.vue")['default']>
export const LazyProfileOrders: LazyComponent<typeof import("../components/Profile/ProfileOrders.vue")['default']>
export const LazyProfileWishlist: LazyComponent<typeof import("../components/Profile/ProfileWishlist.vue")['default']>
export const LazyRegisterStep1: LazyComponent<typeof import("../components/Register/RegisterStep1.vue")['default']>
export const LazyRegisterStep2: LazyComponent<typeof import("../components/Register/RegisterStep2.vue")['default']>
export const LazyHomeBestSellers: LazyComponent<typeof import("../components/home/BestSellers.vue")['default']>
export const LazyHomeHero: LazyComponent<typeof import("../components/home/Hero.vue")['default']>
export const LazyHomeHotDeals: LazyComponent<typeof import("../components/home/HotDeals.vue")['default']>
export const LazyHomeProductCategories: LazyComponent<typeof import("../components/home/ProductCategories.vue")['default']>
export const LazyHomeProductList: LazyComponent<typeof import("../components/home/ProductList.vue")['default']>
export const LazyProductsProductContent: LazyComponent<typeof import("../components/products/ProductContent.vue")['default']>
export const LazyProductsProductError: LazyComponent<typeof import("../components/products/ProductError.vue")['default']>
export const LazyProductsProductGallery: LazyComponent<typeof import("../components/products/ProductGallery.vue")['default']>
export const LazyProductsProductInfo: LazyComponent<typeof import("../components/products/ProductInfo.vue")['default']>
export const LazyProductsProductLoading: LazyComponent<typeof import("../components/products/ProductLoading.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
