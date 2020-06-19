import React from "react";
import { Flex, Button } from "./primitives/styled-rebass";

interface TabsExperimentTooProps {}

export const SettingsTabs: React.FC<TabsExperimentTooProps> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = React.useState<string>("General");
  return (
    <Flex flexDirection="column" flex={1}>
      <Flex
        as="ol"
        p={0}
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
    <li>
      <Button
        type="button"
        bg="transparent"
        p={3}
        borderRadius={0}
        color="text"
        sx={{
          borderBottom: activeTab === label ? "2px solid #f4327f" : undefined,
        }}
        onClick={() => setActiveTab(label)}
      >
        {label}
      </Button>
    </li>
  );
};
