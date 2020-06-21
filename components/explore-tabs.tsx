import React from "react";

import { Flex, Text, Button } from "./primitives/styled-rebass";
import { useParam } from "../hooks/use-params";

interface ExploreTabsProps {}

type TabTypes = "Explore" | "Activities";

export const ExploreTabs: React.FC<ExploreTabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState<"Activities" | "Explore">(
    "Activities"
  );
  const tab = useParam("tab", "string");

  React.useEffect(() => {
    if (tab === "") {
      setActiveTab("Activities");
    } else {
      setActiveTab(tab as TabTypes);
    }
  }, [tab]);

  return (
    <Flex height="100%" flexDirection="column" flex={1}>
      <Flex
        as="ol"
        flex={1}
        p={0}
        m={0}
        mb={1}
        minHeight="70px"
        justifyContent="space-around"
        sx={{ listStyle: "none" }}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) {
            return;
          }

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
        return <Flex> {child}</Flex>; // child.props.children;
      })}
    </Flex>
  );
};

interface TabProps {
  activeTab: string;
  label: "Explore" | "Activities";
  setActiveTab: React.Dispatch<React.SetStateAction<"Explore" | "Activities">>;
}

const Tab: React.FC<TabProps> = ({ activeTab, label, setActiveTab }) => {
  return (
    <Flex
      as="li"
      height="100%"
      width={1 / 2}
      px={3}
      pb={3}
      justifyContent="center"
    >
      <Button
        type="button"
        bg="transparent"
        p={3}
        width={0.8}
        pb={3}
        borderRadius={0}
        color="text"
        onClick={(event) => {
          event.preventDefault();
          setActiveTab(label);
        }}
        sx={{
          borderBottom:
            activeTab === label ? "2px solid #f4327f" : "2px solid transparent",
        }}
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
