import RoomDetails from "../../components/room/RoomDetails";
import Layout from "../../components/layout/Layout";

import { getRoomDetails } from "../../redux/actions/roomActions";

import { wrapper } from "../../redux/store";

export default function RoomDetailsPage() {
  return (
    <Layout title="Room Details">
      <RoomDetails />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ req, params, store }) => {
    await store.dispatch(getRoomDetails(req, params.id));
  }
);
