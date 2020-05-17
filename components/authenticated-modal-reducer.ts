type ModalViewStates = "isOpen" | "isClosed";

export type AuthenticatedModalViewActions =
  | "openMapViewModal"
  | "closeMapViewModal"
  | "openHotelViewModal"
  | "closeHotelViewModal"
  | "openFilterModal"
  | "closeFilterModal"
  | "openReviewsModal"
  | "closeReviewsModal"
  | "openBookingsModal"
  | "closeBookingsModal"
  | "openProfileModal"
  | "closeProfileModal"
  | "openSelectDateModal"
  | "closeSelectDateModal"
  | "openSettingsModal"
  | "closeSettingsModal"
  | "openActivityModal"
  | "closeActivityModal"
  | "openSidelistModal"
  | "closeSidelistModal"
  | "reset";

export interface AuthenticatedModalStateInterface {
  mapViewModal: ModalViewStates;
  hotelViewModal: ModalViewStates;
  filterModal: ModalViewStates;
  reviewsModal: ModalViewStates;
  bookingsModal: ModalViewStates;
  profileModal: ModalViewStates;
  selectDateModal: ModalViewStates;
  settingsModal: ModalViewStates;
  activityModal: ModalViewStates;
  sidelistModal: ModalViewStates;
}

const initialModalState: AuthenticatedModalStateInterface = {
  activityModal: "isClosed",
  bookingsModal: "isClosed",
  filterModal: "isClosed",
  hotelViewModal: "isClosed",
  mapViewModal: "isClosed",
  profileModal: "isClosed",
  reviewsModal: "isClosed",
  selectDateModal: "isClosed",
  settingsModal: "isClosed",
  sidelistModal: "isClosed",
};

function initModal(initialModalState: AuthenticatedModalStateInterface) {
  return initialModalState;
}

export function authenticatedModalReducer(
  state: AuthenticatedModalStateInterface,
  action: AuthenticatedModalViewActions
): AuthenticatedModalStateInterface {
  switch (action) {
    case "closeActivityModal":
      return {
        activityModal: "isClosed",
        bookingsModal: state.bookingsModal,
        filterModal: state.filterModal,
        hotelViewModal: state.hotelViewModal,
        mapViewModal: state.mapViewModal,
        profileModal: state.profileModal,
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: state.sidelistModal,
      };
    case "openActivityModal":
      return {
        activityModal: "isOpen",
        bookingsModal: state.bookingsModal,
        filterModal: state.filterModal,
        hotelViewModal: state.hotelViewModal,
        mapViewModal: state.mapViewModal,
        profileModal: state.profileModal,
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: state.sidelistModal,
      };
    case "closeBookingsModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: "isClosed",
        filterModal: state.filterModal,
        hotelViewModal: state.hotelViewModal,
        mapViewModal: state.mapViewModal,
        profileModal: state.profileModal,
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: state.sidelistModal,
      };
    case "openBookingsModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: "isOpen",
        filterModal: state.filterModal,
        hotelViewModal: state.hotelViewModal,
        mapViewModal: state.mapViewModal,
        profileModal: state.profileModal,
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: state.sidelistModal,
      };
    case "closeFilterModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: state.bookingsModal,
        filterModal: "isClosed",
        hotelViewModal: state.hotelViewModal,
        mapViewModal: state.mapViewModal,
        profileModal: state.profileModal,
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: state.sidelistModal,
      };
    case "openFilterModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: state.bookingsModal,
        filterModal: "isOpen",
        hotelViewModal: state.hotelViewModal,
        mapViewModal: state.mapViewModal,
        profileModal: state.profileModal,
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: state.sidelistModal,
      };
    case "closeHotelViewModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: state.bookingsModal,
        filterModal: state.filterModal,
        hotelViewModal: "isClosed",
        mapViewModal: state.mapViewModal,
        profileModal: state.profileModal,
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: state.sidelistModal,
      };
    case "openHotelViewModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: state.bookingsModal,
        filterModal: state.filterModal,
        hotelViewModal: "isOpen",
        mapViewModal: state.mapViewModal,
        profileModal: state.profileModal,
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: state.sidelistModal,
      };
    case "closeMapViewModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: state.bookingsModal,
        filterModal: state.filterModal,
        hotelViewModal: state.hotelViewModal,
        mapViewModal: "isClosed",
        profileModal: state.profileModal,
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: state.sidelistModal,
      };
    case "openMapViewModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: state.bookingsModal,
        filterModal: state.filterModal,
        hotelViewModal: state.hotelViewModal,
        mapViewModal: "isOpen",
        profileModal: state.profileModal,
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: state.sidelistModal,
      };
    case "closeProfileModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: state.bookingsModal,
        filterModal: state.filterModal,
        hotelViewModal: state.hotelViewModal,
        mapViewModal: state.mapViewModal,
        profileModal: "isClosed",
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: state.sidelistModal,
      };
    case "openProfileModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: state.bookingsModal,
        filterModal: state.filterModal,
        hotelViewModal: state.hotelViewModal,
        mapViewModal: state.mapViewModal,
        profileModal: "isOpen",
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: state.sidelistModal,
      };
    case "closeReviewsModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: state.bookingsModal,
        filterModal: state.filterModal,
        hotelViewModal: state.hotelViewModal,
        mapViewModal: state.mapViewModal,
        profileModal: state.profileModal,
        reviewsModal: "isClosed",
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: state.sidelistModal,
      };
    case "openReviewsModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: state.bookingsModal,
        filterModal: state.filterModal,
        hotelViewModal: state.hotelViewModal,
        mapViewModal: state.mapViewModal,
        profileModal: state.profileModal,
        reviewsModal: "isOpen",
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: state.sidelistModal,
      };
    case "closeSelectDateModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: state.bookingsModal,
        filterModal: state.filterModal,
        hotelViewModal: state.hotelViewModal,
        mapViewModal: state.mapViewModal,
        profileModal: state.profileModal,
        reviewsModal: state.reviewsModal,
        selectDateModal: "isClosed",
        settingsModal: state.settingsModal,
        sidelistModal: state.sidelistModal,
      };
    case "closeSettingsModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: state.bookingsModal,
        filterModal: state.filterModal,
        hotelViewModal: state.hotelViewModal,
        mapViewModal: state.mapViewModal,
        profileModal: state.profileModal,
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: "isClosed",
        sidelistModal: state.sidelistModal,
      };
    case "openSettingsModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: state.bookingsModal,
        filterModal: state.filterModal,
        hotelViewModal: state.hotelViewModal,
        mapViewModal: state.mapViewModal,
        profileModal: state.profileModal,
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: "isOpen",
        sidelistModal: state.sidelistModal,
      };
    case "closeSidelistModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: state.bookingsModal,
        filterModal: state.filterModal,
        hotelViewModal: state.hotelViewModal,
        mapViewModal: state.mapViewModal,
        profileModal: state.profileModal,
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: "isClosed",
      };
    case "openSidelistModal":
      return {
        activityModal: state.activityModal,
        bookingsModal: state.bookingsModal,
        filterModal: state.filterModal,
        hotelViewModal: state.hotelViewModal,
        mapViewModal: state.mapViewModal,
        profileModal: state.profileModal,
        reviewsModal: state.reviewsModal,
        selectDateModal: state.selectDateModal,
        settingsModal: state.settingsModal,
        sidelistModal: "isOpen",
      };
    case "reset":
      return initModal(initialModalState);
    default:
      return initModal(initialModalState);
  }
}
