import Logo from "@/components/ui/Logo";

export default function Authlayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
            <div className="bg-purple-950 lg:bg-[url('/grafico.svg')] lg:bg-no-repeat lg:bg-left-bottom lg:bg-[size:25rem] lg:h-screen">
                <div className="w-90 mx-auto py-10 lg:py-15">
                    <Logo />
                </div>
            </div>

            <div className="p-10 lg:py-28 h-screen overflow-y-auto">
                <div className="max-w-3xl mx-auto">
                    { children }
                </div>
            </div>
        </div>
    );
}