# Learn Courses

## Chapter1

## Chapter2 style

    gloabal styles
    tailwindcss
    css Modules
    clsx

## Chapter3 optimise fonts and images

    next/font

        ```js
            import { Inter } from 'next/font/google';
            export const inter = Inter({ subsets: ['latin'] });
            <body className={`${inter.className}`}>{children}</body>
        ```

    next/image
        className: hidden-移动端移除dom，md:block-显示dom PC屏幕
        width/height: 与源图像相同的宽高比(an aspect ratio identical to the source image)

    ```js
        import Image from 'next/image';
        <Image
            src
            width
            height
            alt
            className
        />
    ```

## Chapter4 Creating Layouts and Pages

    pages.tsx： app下的folder代表路由path，folder下需要有 pages.tsx
    layout.tsx: To share UI across multiple pages

## Chapter5 导航

    使用a标签跳转，整个页面刷新
    使用Link, 跳转时局部刷新
    import Link from 'next/link';
    
    为了改善导航体验，Next.js会根据路由段自动对应用进行代码拆分。
    与传统的React SPA不同，在传统的React SPA中，浏览器在初始加载时加载所有应用程序代码。

    生产环境，next.js 会预加载 link标签指向的代码，切换导航时，可以做到即刻转换

    usePathname()获取当前path

## Chapter6 创建数据库
