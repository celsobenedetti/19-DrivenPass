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

  userItems.setCredentials(credentials);
  userItems.setNotes(notes);
  userItems.setCards(cards);
  userItems.setWifis(wifi);
  userItems.setDocuments(documents);
};

export const fetchCredentials = async () => {
  const { data: credentials } = (await useGet(
    "credentials"
  )) as ItemData<Credential>;
  console.log({ credentials });
  userItems.setCredentials(credentials);
};

export const fetchNotes = async () => {
  const { data: notes } = (await useGet("notes")) as ItemData<Note>;
  userItems.setNotes(notes);
};

export const fetchCards = async () => {
  const { data: cards } = (await useGet("cards")) as ItemData<Card>;
  userItems.setCards(cards);
};

export const fetchWifis = async () => {
  const { data: wifis } = (await useGet("wifi")) as ItemData<Wifi>;
  userItems.setWifis(wifis);
};

export const fetchDocuments = async () => {
  const { data: documents } = (await useGet("docs")) as ItemData<Document>;
  userItems.setDocuments(documents);
};
