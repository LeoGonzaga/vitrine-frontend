"use client";

import React, { useState } from "react";
import Card from "../Card";
import Details from "../Details";

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
    name: "Farmácia 2",
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
    name: "Farmácia 3",
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
  const [selectedItem, setSelectedItem] = useState(-1);

  const handleSelectedItem = (value: number) => {
    setSelectedItem(value);
  };

  return (
    <>
      {selectedItem > 0 && <Details onBack={handleSelectedItem} />}
      <div className="mt-2 max-h-[100vh] overflow-y-auto w-full flex flex-wrap gap-4 justify-center">
        {MOCK.map((elem, index) => (
          <div key={index} onClick={() => setSelectedItem(index)}>
            <Card {...elem} key={index} />
          </div>
        ))}
      </div>
    </>
  );
};
