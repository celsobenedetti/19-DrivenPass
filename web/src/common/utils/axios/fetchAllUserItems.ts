import userItems from "@/global/userItems";
import { useGet } from ".";
import {
  Card,
  Credential,
  Document,
  Item,
  Note,
  Wifi,
} from "../validation/itemSchemas";

type ItemData<T extends Item> = { data: T[] };

export const fetchAllUserItems = async () => {
  const { data: credentials } = (await useGet(
    "credentials"
  )) as ItemData<Credential>;

  const { data: notes } = (await useGet("notes")) as ItemData<Note>;
  const { data: cards } = (await useGet("cards")) as ItemData<Card>;
  const { data: wifi } = (await useGet("wifi")) as ItemData<Wifi>;
  const { data: documents } = (await useGet("docs")) as ItemData<Document>;

  console.log({ cards });

  userItems.setCredentials(credentials);
  userItems.setNotes(notes);
  userItems.setCards(cards);
  userItems.setWifis(wifi);
  userItems.setDocuments(documents);
};
