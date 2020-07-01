import React, { ReactElement } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import { ClonedChildrenFromAuthLayout } from "../pages/traveling";
import { Flex, Text, Image, Button } from "./primitives/styled-rebass";
import { User } from "../__generated__/__intermediate__/lib/subscriptions/new-message.graphql-e9d1ecf649bc813fdb2afa757add0dc67efddc8f";
import { Image as ImageType } from "*/add-new-message.graphql";
import { LayoutAuthorizedHeader } from "./layout-authorized-header";
const MapNoSSR = dynamic(() => import("./map"), {
  ssr: false,
});

interface MapPageComponentProps extends ClonedChildrenFromAuthLayout {
  title: string;
}

const AccordionIcon = styled.span<{ iconState: "isExpanded" | "isContracted" }>`
  border: solid white;
  border-width: 0 2px 2px 0;
  height: 0.5rem;
  pointer-events: none;
  position: absolute;
  right: 2em;
  top: 50%;
  transform: ${({ iconState }) =>
    iconState === "isContracted"
      ? "translateY(-60%) rotate(45deg)"
      : "translateY(-50%) rotate(-135deg)"};
  width: 0.5rem;

  transition: transform 0.5s ease;

  &:focus {
    border-color: hsl(216, 94%, 73%);
  }

  &:hover {
    border-color: hsl(216, 94%, 73%);
  }
`;

export function MapPageComponent({
  modalOverlayDispatch,
  modalOverlayState,
}: // title,
MapPageComponentProps): ReactElement {
  const [baseTabStatus, setBaseTabStatus] = React.useState<
    "isHidden" | "isVisible"
  >("isHidden");

  // to get the origin based on click
  const [originData, setOriginData] = React.useState<[number, number] | null>(
    null
  );

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setOriginData([position.coords.longitude, position.coords.latitude]);
    });
    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <>
      <Flex
        flexDirection="column"
        flex={1}
        p={3}
        mt="auto"
        width={1}
        sx={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          top: 0,
        }}
      >
        <LayoutAuthorizedHeader
          modalOverlayDispatch={modalOverlayDispatch}
          modalOverlayState={modalOverlayState}
        />
        {originData !== null ? (
          <MapNoSSR
            initPopup={false}
            lngLat={originData}
            name={"Fake map name"}
            price={"$1500"}
          />
        ) : null}
      </Flex>
      <Flex
        flexDirection="column"
        flex={1}
        p={3}
        mt="auto"
        width={1}
        sx={{ position: "absolute", bottom: 0, zIndex: 90 }}
      >
        <RenderMapTabDrawer
          data={fauxMapList}
          baseTabStatus={baseTabStatus}
          setBaseTabStatus={setBaseTabStatus}
        />
      </Flex>
    </>
  );
}

interface RenderMapListProps {
  baseTabStatus: "isHidden" | "isVisible";
  data: MapAttributes[];
  setBaseTabStatus: React.Dispatch<
    React.SetStateAction<"isHidden" | "isVisible">
  >;
}

function RenderMapTabDrawer({
  baseTabStatus,
  data,
  setBaseTabStatus,
}: RenderMapListProps) {
  const hidden = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap" /* added line */,
    border: "0",

    transition: "height 0.5s ease",
  };
  return (
    <Flex flexDirection="column" width={1} bg="white">
      <Button
        type="button"
        aria-expanded={baseTabStatus === "isHidden" ? false : true}
        width={1}
        onClick={() => {
          if (baseTabStatus === "isHidden") {
            setBaseTabStatus("isVisible");
          }
          if (baseTabStatus === "isVisible") {
            setBaseTabStatus("isHidden");
          }
        }}
        sx={{ position: "relative" }}
      >
        {baseTabStatus === "isHidden" ? "open" : "close"}
        <AccordionIcon
          iconState={
            baseTabStatus === "isHidden" ? "isContracted" : "isExpanded"
          }
        />
      </Button>
      <Flex
        flexDirection="column"
        sx={baseTabStatus === "isHidden" ? hidden : undefined}
      >
        {data.map((dataItem, dataIndex) => (
          <Flex
            key={dataIndex + "-temp-data-key-for-prototyping"}
            flexDirection="column"
            py={3}
            borderBottom="1px #eee solid"
          >
            <Flex alignItems="center">
              <Flex height="50px" width="50px" flexDirection="column">
                <Image src={dataItem.image.uri} sx={{ borderRadius: "12px" }} />
              </Flex>
              <Flex flexDirection="column" pl={2} flex={1}>
                <Text>{dataItem.from.name}</Text>
                <Text>{dataItem.notice}</Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

interface MapAttributes {
  type: "follow" | "updates" | "pulse";
  notice: ReactElement | string;
  from: Partial<User>;
  image: RecursivePartial<ImageType>;
}

const fauxMapList: MapAttributes[] = [
  {
    from: { name: "Fake Person" },
    type: "follow",
    notice: <span>Fake Person posted an update.</span>,
    image: {
      id: "1",
      uri: "https://source.unsplash.com/random/50x50?nature&black+and+white",
      user: { name: "Fake Person" },
    },
  },
  {
    from: { name: "Soso Fake Person" },
    type: "follow",
    notice: <span>Another fake person got married!</span>,
    image: {
      id: "1",
      uri: "https://source.unsplash.com/random/50x50?city&black+and+white",
      user: { name: "Fake Person" },
    },
  },
  {
    from: { name: "Fun Nightclub" },
    type: "pulse",
    notice: <span>Is hosting Madlib!</span>,
    image: {
      id: "1",
      uri: "https://source.unsplash.com/random/50x50?whale&black+and+white",
      user: { name: "Fake Person" },
    },
  },
  {
    from: { name: "Fun Nightclub" },
    type: "updates",
    notice: <span>Is closed until further notice due to Covid-19.</span>,
    image: {
      id: "1",
      uri:
        "https://source.unsplash.com/random/50x50?countryside&black+and+white",
      user: { name: "Fake Person" },
    },
  },
];
