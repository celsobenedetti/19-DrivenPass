import {
  Card,
  Credential,
  Document,
  Note,
  Wifi,
} from "@/common/utils/validation/itemSchemas";
import { computed, reactive } from "vue";

const items = reactive({
  credentials: <Array<Credential>>[],
  notes: <Array<Note>>[],
  cards: <Array<Card>>[],
  wifis: <Array<Wifi>>[],
  documents: <Array<Document>>[],
});

const getItems = computed(() => items);

const setCredentials = (credentials: Credential[]) => {
  items.credentials = credentials;
};
const setNotes = (notes: Note[]) => {
  items.notes = notes;
};

const setCards = (card: Card[]) => {
  items.cards = card;
};

const setWifis = (wifi: Wifi[]) => {
  items.wifis = wifi;
};

const setDocuments = (document: Document[]) => {
  items.documents = document;
};

export default {
  getItems,
  setCredentials,
  setNotes,
  setCards,
  setWifis,
  setDocuments,
};
