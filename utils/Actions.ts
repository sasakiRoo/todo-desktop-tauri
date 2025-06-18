interface Action {
  label: string;
  icon?: string;
}

export const actionList: Action[] = [
  {
    label: "Notes Taking",
    icon: "meteor-icons:book-open",
  },
  {
    label: "Planning",
    icon: "meteor-icons:table-list",
  },
];
