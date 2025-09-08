import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

function App() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center">
            <Button>Click me</Button>
            <Search className="text-red-600" />
        </div>
    );
}

export default App;
