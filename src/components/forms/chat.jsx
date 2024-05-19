import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { SendHorizonal } from "lucide-react";
import { Textarea } from "../ui/textarea";

const chatSchema = z.object({
  message: z.string(),
});

const ChatForm = ({ sendTyping, stopTyping, sendMsg }) => {
  const form = useForm({
    resolver: zodResolver(chatSchema),
    defaultValues: {
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    const result = chatSchema.safeParse(values);
    if (result.success) {
      sendMsg(values);
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-end gap-3 rounded-2xl bg-white p-2 shadow-md"
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Send a message..."
                  rows={5}
                  className="scrollbar-thin resize-none border-none bg-transparent"
                  onChange={(e) => {
                    field.onChange(e);
                    sendTyping();
                  }}
                  onBlur={stopTyping}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button size="icon">
          <SendHorizonal />
        </Button>
      </form>
    </Form>
  );
};

export default ChatForm;
