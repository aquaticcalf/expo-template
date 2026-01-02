import * as CollapsiblePrimitive from "@rn-primitives/collapsible";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { ThemedText } from "@/components/themed-text";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColorScheme } from "@/hooks/use-color-scheme";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

const CollapsibleContent = CollapsiblePrimitive.Content;

function CollapsibleComponent({ children, title }: { children: React.ReactNode; title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? "light";

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <TouchableOpacity
          style={styles.heading}
          onPress={() => setIsOpen((value) => !value)}
          activeOpacity={0.8}
        >
          <IconSymbol
            name="chevron.right"
            size={18}
            weight="medium"
            color={theme === "light" ? "#687076" : "#9BA1A6"}
            style={{ transform: [{ rotate: isOpen ? "90deg" : "0deg" }] }}
          />
          <ThemedText type="defaultSemiBold">{title}</ThemedText>
        </TouchableOpacity>
      </CollapsibleTrigger>
      {isOpen && <CollapsibleContent style={styles.content}>{children}</CollapsibleContent>}
    </Collapsible>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});

export { Collapsible, CollapsibleTrigger, CollapsibleContent, CollapsibleComponent };
