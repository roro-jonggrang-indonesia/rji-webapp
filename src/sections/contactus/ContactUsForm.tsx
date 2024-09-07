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
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { reverseFeatureVariants } from "@/lib/variants";

export default function ContactUsForm() {
  const form = useForm();

  return (
    <div className="w-full">
      <Card className="w-full rounded-2xl border-none bg-black/5">
        <CardContent className="space-y-5 py-4">
          <Form {...form}>
            <FormField
              control={form.control}
              name="..."
              render={() => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Input
                      className="h-12 rounded-full border-none bg-white"
                      placeholder="First Name"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="..."
              render={() => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Input
                      className="h-12 rounded-full border-none bg-white"
                      placeholder="example@gmail.com  "
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="..."
              render={() => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Input
                      className="h-12 rounded-full border-none bg-white"
                      placeholder="0871717171771"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="..."
              render={() => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Textarea
                      className="rounded-xl border-none bg-white"
                      placeholder="Please type your message here..."
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </Form>
        </CardContent>
        <CardFooter>
          <Button className="w-full rounded-full border bg-[#0D1846] text-white hover:border-[#0D1846] hover:text-[#0D1846]">
            Send Message
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
