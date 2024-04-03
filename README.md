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

    使用vercel，构建生产版项目

## Chapter7 抓取数据

    api layer - 应用和数据库之间的层
    Server Components - 
    SQL - 关系型数据库 industry standard，可以直接在server components种使用sql查询数据

## Chapter8 静态渲染、动态渲染

    静态渲染
        更快
        减少服务器负担
        seo

    动态渲染
        优点
            real-time data
            user-specific content
            request time information
        unstable_noStore 退出静态渲染
        限制：only as fast as your slowest data fetch

## Chapter9 Streaming

    streaming pages
        loading.tsx 一个特殊的文件，允许创建后备ui，在页面内容加载完成后会被替换
        Route groups：(overview)，loading.tsx + page.tsx 移入，对路由不可见

    streaming components
        React Suspense - more granular颗粒度
        fallback-备选组件

    ```js
        <Suspense fallback={<CardSkeleton/>}>
    ```

## Chapter10 Partial Prerendering (Optional)

## Chapter11 搜索和导航

    searchParams, usePathname, and useRouter.
    useSearchParams() / searchParams :
        客户端读取，使用useSearchParams
        服务端读取，使用searchParams
    use-debounce

## Chapter12 Mutating Data

    React Server Actions 
        - Progressive Enhancement
        - 允许 run asynchronous code directly on the server
        - also deeply integrated with Next.js caching
    revalidatePath - 更新数据

## Chapter13 错误处理

    try/catch

    error.tsx
        use client
        error / reset
    notFound 函数 处理 404
        not-found.tsx 返回fallback ui， 比error.tsx 优先级高

## Chapter14 Improving Accessibility

    eslint-plugin-jsx-a11y 
        npm run lint
        build 打包过程包含这一步
    client-side form validation 
        required
    server-side form validation
        useFormState

## Chapter15 Adding Authentication

    Authentication - making sure the user is who they say they are
    Authorization  - what parts of the application they are allowed to use

    NextAuth.js
    useFormStatus
    useFormState

## Chapter16 metadata

    provides additional details about a webpage
    a significant role in enhancing a webpage's SEO

    Title Metadata
        <title>Page Title</title>
    Description Metadata
        <meta name="description" content="A brief description of the page content." />
    Keyword Metadata
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
    Open Graph Metadata - enhances the way a webpage is represented when shared on social media platforms, providing information such as the title, description, and preview image
        <meta property="og:title" content="Title Here" />
        <meta property="og:description" content="Description Here" />
        <meta property="og:image" content="image_url_here" />
    Favicon Metadata
        <link rel="icon" href="path/to/favicon.ico" />

    Next.js Api
        Config-based: static metadata object in layout.js / page.js
        File-based:   
