"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import LoadingButton from "@/components/LoadingButton";
import { sendContactEmail } from "./actions";
import { useTransition } from "react";

const contactFormSchema = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  email: z.string().email("Email tidak valid").min(1, "Email harus diisi"),
  phone: z.string().min(11, "Nomor telepon harus diisi minimal 11 angka"),
  message: z.string().min(10, "Pesan harus diisi minimal 10 karakter"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactUsForm() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: ContactFormValues) => {
    startTransition(async () => {
      try {
        const result = await sendContactEmail(data); // Server action expects data to be ContactFormValues type

        if (result.success) {
          toast({
            title: "Email Terkirim",
            description: result.message,
          });
          form.reset();
        } else {
          toast({
            title: "Terjadi Kesalahan",
            description: result.message,
            variant: "destructive",
          });
        }
      } catch (err: any) {
        console.log(err);
        toast({
          title: "Terjadi Kesalahan",
          description: err.message,
        });
      }
    });
  };

  return (
    <div className="w-full">
      <Card className="w-full rounded-2xl border-none bg-black/5">
        <CardContent className="space-y-5 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input
                        {...field}
                        className="h-12 rounded-full border-none bg-white"
                        placeholder="Nama anda"
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input
                        {...field}
                        className="h-12 rounded-full border-none bg-white"
                        placeholder="example@gmail.com"
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input
                        {...field}
                        className="h-12 rounded-full border-none bg-white"
                        placeholder="08121928312"
                        inputMode="numeric"
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Textarea
                        {...field}
                        className="rounded-xl border-none bg-white"
                        placeholder="Tulis pesan anda disini"
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CardFooter>
                <LoadingButton
                  loading={form.formState.isSubmitting || isPending}
                  type="submit"
                  className="w-full rounded-full border bg-[#0D1846] text-white hover:border-[#0D1846] hover:text-[#0D1846]"
                >
                  Send Message
                </LoadingButton>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
