import React from "react";
import { Flex, Text, CustomButton } from "./primitives/styled-rebass";
import Icon, { IconProps } from "./icon";

type FeaturesTypes = Partial<IconProps["name"]>;

const featureList: FeaturesTypes[] = [
  "wifi",
  "restaurant",
  "swimming",
  "bar",
  "parking",
];

interface FilterFeaturesProps {}

export const FilterFeatures: React.FC<FilterFeaturesProps> = ({}) => {
  const [selectedFeatures, setSelectedFeatures] = React.useState<
    FeaturesTypes[] | null
  >(null);
  return (
    <Flex width={1}>
      <Text pl={3} fontSize={3}>
        Features
      </Text>
      <FeaturesContainer
        features={featureList}
        selectedFeatures={selectedFeatures}
        setSelectedFeatures={setSelectedFeatures}
      />
    </Flex>
  );
};

interface FeaturesContainerProps {
  features: FeaturesTypes[];
  selectedFeatures: FeaturesTypes[] | null;
  setSelectedFeatures: React.Dispatch<
    React.SetStateAction<FeaturesTypes[] | null>
  >;
}

export const FeaturesContainer: React.FC<FeaturesContainerProps> = ({
  features,
  selectedFeatures,
  setSelectedFeatures,
}) => {
  return (
    <Flex
      overflowX="auto"
      sx={{
        WebkitOverflowScrolling: "touch",
      }}
    >
      {features.map((singleFeature, featureIndex) => {
        const bgColor = selectedFeatures?.includes(singleFeature)
          ? "#f4327f"
          : "rgba(94, 104, 112, .1)";

        const iconFill =
          bgColor === "#f4327f" ? "#fff" : "rgba(94, 104, 112, 1)";

        return (
          <Flex
            key={`${singleFeature}-${featureIndex}`}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mt={4}
            mx={3}
            p={3}
            px={4}
          >
            <CustomButton
              height="50px"
              width="50px"
              p={0}
              // mb={2}
              onClick={() => {
                if (selectedFeatures && bgColor === "#f4327f") {
                  const newFeatures = selectedFeatures?.filter(
                    (feature) => feature !== singleFeature
                  );
                  setSelectedFeatures([...newFeatures]);
                } else {
                  const newFeatures: FeaturesTypes[] = [singleFeature];
                  setSelectedFeatures([
                    ...(selectedFeatures ?? []),
                    ...newFeatures,
                  ]);
                }
              }}
              backgroundColor={bgColor}
              backgroundImage={
                bgColor === "#f4327f"
                  ? `linear-gradient(
                0deg,
                rgba(210, 48, 120, 0.2),
                rgba(254, 97, 97, 0.2),
                rgba(255, 121, 85, 0.2)
                )`
                  : null
              }
              boxShadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
              borderRadius="50%"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border:
                  bgColor === "#f4327f"
                    ? "2px transparent solid"
                    : "2px #ccc solid",
              }}
            >
              <Text
                fontFamily="montserrat"
                color={bgColor === "#f4327f" ? "#fff" : "rgba(34,34,34,0.50)"}
              >
                <Icon
                  active={false}
                  name={singleFeature}
                  mt={singleFeature === "wifi" ? "12px" : null}
                  size={singleFeature === "wifi" ? "33px" : "20px"}
                  fill={iconFill}
                />
              </Text>
            </CustomButton>

            <Text pt={3} color="rgba(34,34,34,0.50)">
              {singleFeature}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};
