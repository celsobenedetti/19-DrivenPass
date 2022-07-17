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

const getItems = computed(() => items);
const getCredentials = computed(() => items.credentials);
const getNotes = computed(() => items.notes);
const getCards = computed(() => items.cards);
const getWifis = computed(() => items.wifis);
const getDocuments = computed(() => items.documents);

export default {
  getItems,
  setCredentials,
  setNotes,
  setCards,
  setWifis,
  setDocuments,
  getCredentials,
  getNotes,
  getWifis,
  getCards,
  getDocuments,
};
