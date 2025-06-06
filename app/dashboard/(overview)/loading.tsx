// loading.tsx is a special Next.js file built on top of Suspense,
// allows to create fallback UI to show as a replacement while page content loads.

import DashboardSkeleton from "@/app/ui/skeletons"

export default function Loading() {
    return <DashboardSkeleton />
}