import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SignFlow } from "../types";
import { useState } from "react";

interface SignInCardProps {
    setState: (state: SignFlow) => void;
}

export const SignUpCard: React.FC<SignInCardProps> = ({ setState }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>Cadastre - se</CardTitle>
                <CardDescription>
                    Use o email ou outro serviço para continuar
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input
                        disabled={false}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email"
                        type="email"
                        required
                    />
                    <Input
                        disabled={false}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Senha"
                        type="password"
                        required
                    />
                    <Input
                        disabled={false}
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        placeholder="Repitir senha"
                        type="password"
                        required
                    />
                    <Button
                        type="submit"
                        className="w-full"
                        size={"lg"}
                        disabled={false}
                    >
                        Continue
                    </Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5">
                    <Button
                        disabled={false}
                        onClick={() => {}}
                        variant={"outline"}
                        size={"lg"}
                        className="w-full relative"
                    >
                        <FcGoogle className="size-5 absolute top-3 left-2.5" />
                        Logar com Google
                    </Button>
                    <Button
                        disabled={false}
                        onClick={() => {}}
                        variant={"outline"}
                        size={"lg"}
                        className="w-full relative"
                    >
                        <BsGithub className="size-5 absolute top-3 left-2.5" />
                        Logar com Github
                    </Button>
                    <p className="text-xs text-muted-foreground">
                        Ja possui conta?{" "}
                        <span
                            onClick={() => setState("signIn")}
                            className="text-sky-700 hover:underline cursor-pointer"
                        >
                            Então faça o login
                        </span>
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};
