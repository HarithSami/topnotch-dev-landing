
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2, Send, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

interface ContactModalProps {
    children: React.ReactNode;
}

export function ContactModal({ children }: ContactModalProps) {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                toast.success("Message sent! We'll get back to you soon.");
                form.reset();
                setOpen(false);
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none bg-background/95 backdrop-blur-xl shadow-2xl">
                <div className="bg-primary/5 p-8 border-b border-primary/10">
                    <DialogHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <MessageSquare className="h-5 w-5" />
                            </div>
                            <DialogTitle className="text-2xl font-bold">Contact Us</DialogTitle>
                        </div>
                        <DialogDescription className="text-muted-foreground text-base">
                            Fill out the form below and our team will get back to you as soon as possible.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="p-8"
                >
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John Doe" {...field} className="bg-muted/50 border-primary/10 focus:border-primary/30 transition-all hover:bg-muted/80" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="john@example.com" {...field} className="bg-muted/50 border-primary/10 focus:border-primary/30 transition-all hover:bg-muted/80" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea 
                                                placeholder="Tell us about your project..." 
                                                className="min-h-[120px] bg-muted/50 border-primary/10 focus:border-primary/30 transition-all resize-none hover:bg-muted/80" 
                                                {...field} 
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button 
                                type="submit" 
                                className="w-full h-12 text-base font-semibold group transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98]" 
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </Form>
                </motion.div>
            </DialogContent>
        </Dialog>
    );
}
