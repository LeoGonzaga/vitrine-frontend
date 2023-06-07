import React from "react";
import Card from "../Card";

const MOCK = [
  {
    name: "Farmácia 1",
    address: {
      street:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      number: "123",
      neighborhood: "São José",
    },
    opening: {
      normal: {
        start: "8h",
        end: "17h",
      },
      weekend: {
        sunday: {
          start: "8h",
          end: "17h",
        },
        saturday: {
          start: "8h",
          end: "17h",
        },
      },
    },
  },
  {
    name: "Farmácia 1",
    address: {
      street: "Rua 1",
      number: "123",
      neighborhood: "São José",
    },
    opening: {
      normal: {
        start: "8h",
        end: "17h",
      },
      weekend: {
        sunday: {
          start: "8h",
          end: "17h",
        },
        saturday: {
          start: "8h",
          end: "17h",
        },
      },
    },
  },
  {
    name: "Farmácia 1",
    address: {
      street: "Rua 1",
      number: "123",
      neighborhood: "São José",
    },
    opening: {
      normal: {
        start: "8h",
        end: "17h",
      },
      weekend: {
        sunday: {
          start: "8h",
          end: "17h",
        },
        saturday: {
          start: "8h",
          end: "17h",
        },
      },
    },
  },
  {
    name: "Farmácia 1",
    address: {
      street: "Rua 1",
      number: "123",
      neighborhood: "São José",
    },
    opening: {
      normal: {
        start: "8h",
        end: "17h",
      },
      weekend: {
        sunday: {
          start: "8h",
          end: "17h",
        },
        saturday: {
          start: "8h",
          end: "17h",
        },
      },
    },
  },
  {
    name: "Farmácia 1",
    address: {
      street: "Rua 1",
      number: "123",
      neighborhood: "São José",
    },
    opening: {
      normal: {
        start: "8h",
        end: "17h",
      },
      weekend: {
        sunday: {
          start: "8h",
          end: "17h",
        },
        saturday: {
          start: "8h",
          end: "17h",
        },
      },
    },
  },
];

export const ScrollList = (): JSX.Element => {
  return (
    <div className="mt-2 max-h-[70vh] overflow-y-auto">
      {MOCK.map((elem, index) => (
        <Card key={index} {...elem} />
      ))}
    </div>
  );
};
