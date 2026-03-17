"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import SectionShell from "@/components/shared/SectionShell";
import SectionHeader from "@/components/shared/SectionHeader";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/anwarulkarim13@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionShell>
      <SectionHeader
        badge="Get in Touch"
        title="Contact Us"
        description="Send us your message and we’ll reply directly to your email inbox, Insha’Allah."
      />

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-2xl"
        >
          <Card className="rounded-[32px] border border-emerald-500/20 bg-emerald-500/10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
            <CardContent className="p-8 text-center">
              <h3 className="mb-2 text-2xl font-semibold text-emerald-700 dark:text-emerald-400">
                ✅ Message Sent Successfully
              </h3>
              <p className="text-sm leading-7 text-muted-foreground md:text-base">
                Thank you for reaching out. We’ll get back to you shortly,
                Insha’Allah.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl"
        >
          <Card className="rounded-[32px] border border-border/60 bg-background/80 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="h-12 rounded-2xl border-border/70 bg-background/60"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="h-12 rounded-2xl border-border/70 bg-background/60"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+880..."
                    className="h-12 rounded-2xl border-border/70 bg-background/60"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Type your message here..."
                    className="rounded-2xl border-border/70 bg-background/60"
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="min-w-[180px] rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </SectionShell>
  );
}
