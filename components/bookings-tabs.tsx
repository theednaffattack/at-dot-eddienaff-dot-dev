import React from "react";
import { Button, Flex, Text } from "./primitives/styled-rebass";

interface BookingTabsProps {}

export const BookingsTabs: React.FC<BookingTabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState<string>("Hotels");

  return (
    <Flex height="100%" flexDirection="column" flex={1} mb={4}>
      <Flex
        as="ol"
        width={1}
        p={0}
        m={0}
        mb={1}
        minHeight="70px"
        justifyContent="space-around"
        sx={{ listStyle: "none" }}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return;

          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              setActiveTab={setActiveTab}
            />
          );
        })}
      </Flex>

      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return;
        if (child.props.label !== activeTab) return undefined;
        return child; // child.props.children;
      })}
    </Flex>
  );
};

interface TabProps {
  activeTab: string;
  label: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tab: React.FC<TabProps> = ({ activeTab, label, setActiveTab }) => {
  return (
    <Flex as="li" pb={3} width={1 / 2} justifyContent="center">
      <Button
        type="button"
        bg="transparent"
        p={3}
        width={0.8}
        pb={3}
        borderRadius={0}
        color="text"
        sx={{
          borderBottom:
            activeTab === label ? "2px solid #f4327f" : "2px solid transparent",
        }}
        onClick={() => setActiveTab(label)}
      >
        <Text
          fontFamily="main"
          width={1}
          textAlign="center"
          bg="transparent"
          color="text"
        >
          {label}
        </Text>
      </Button>
    </Flex>
  );
};
