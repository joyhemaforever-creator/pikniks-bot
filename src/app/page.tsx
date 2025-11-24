import ChatInterface from "@/components/ChatInterface";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Pikniks Assistant</h1>
                <p className="text-gray-600">Your personal guide for one-day trips around Ahmedabad</p>
            </div>

            <ChatInterface />

            <div className="mt-8 text-xs text-gray-500">
                <p>Powered by Pikniks.in Data</p>
            </div>
        </main>
    );
}
