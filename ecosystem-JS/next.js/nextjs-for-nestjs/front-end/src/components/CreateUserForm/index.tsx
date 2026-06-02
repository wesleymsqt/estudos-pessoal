"use client";

import { InputText } from "@/components/InputText";
import clsx from "clsx";
import { UserRoundIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../Button";

export function CreateUserForm() {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        "text-center max-w-sm mt-16 mb-32 mx-auto",
      )}
    >
      <form action={""} className="flex-1 flex flex-col gap-6">
        <InputText
          type="text"
          name="name"
          labelText="Nome"
          placeholder="Seu nome"
          disabled={false}
          defaultValue={""}
          required
        />
        <InputText
          type="email"
          name="email"
          labelText="E-mail"
          placeholder="Sua e-mail"
          disabled={false}
          defaultValue={""}
          required
        />
        
      </form>
    </div>
  );
}
