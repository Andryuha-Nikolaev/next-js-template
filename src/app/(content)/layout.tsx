import ContentPageLayout from "@/components/layouts/content-page/ContentPageLayout";

export default function ContentLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ContentPageLayout>{children}</ContentPageLayout>;
}
