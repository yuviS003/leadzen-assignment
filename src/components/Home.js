import { MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "../utils/Pagination";

export default function Home() {
  const [info, setInfo] = useState([]);
  // const [currentInfo, setCurrentInfo] = useState([]);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setInfo(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentInfo = info.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="min-w-screen min-h-screen overflow-auto p-10 bg-gray-200">
      <div className="w-[70%] min-h-[60%] mx-auto">
        {currentInfo.map((data) => {
          return (
            <Accordion
              allowMultiple
              my="50px"
              key={data.id}
              className="bg-white"
            >
              <AccordionItem>
                <AccordionButton className="shadow-md rounded-md">
                  <div className="w-full flex justify-between px-2 py-8">
                    <div className="flex items-center justify-center">
                      {data.company.name}
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="uppercase font-semibold">CONTACT</span>
                      <span>{data.name}</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="uppercase font-semibold">CITY</span>
                      <span>{data.address.street}</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="uppercase font-semibold">STATE</span>
                      <span>{data.address.city}</span>
                    </div>
                  </div>
                  <AccordionIcon mx="10px" />
                </AccordionButton>

                <AccordionPanel
                  p="50px"
                  pt="80px"
                  className="border border-gray-200 rounded border-t-0 shadow-md text-md"
                >
                  <div className="flex flex-col items-start my-3">
                    <span className="font-semibold">Description</span>
                    <p>{data.company.bs + " " + data.company.catchPhrase}</p>
                  </div>
                  <div className="flex w-full">
                    <div className="w-[50%] flex flex-col justify-between items-start">
                      <div className="flex flex-col items-start">
                        <span className="capitalize font-semibold">
                          contact person
                        </span>
                        <span>{data.name}</span>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="capitalize font-semibold">
                          designation
                        </span>
                        <span>employee</span>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="capitalize font-semibold">emails</span>
                        <span>{data.email}</span>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="capitalize font-semibold">phones</span>
                        <span>{data.phone}</span>
                      </div>
                    </div>
                    <div className="w-[50%] flex flex-col justify-between items-start">
                      <div className="flex flex-col items-start">
                        <span className="capitalize font-semibold">
                          Address
                        </span>
                        <span>
                          {data.address.suite +
                            " " +
                            data.address.street +
                            " " +
                            data.address.city +
                            " " +
                            data.address.zipcode}
                        </span>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="capitalize font-semibold">city</span>
                        <span>{data.address.street}</span>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="capitalize font-semibold">state</span>
                        <span>{data.address.city}</span>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="capitalize font-semibold">
                          country
                        </span>
                        <span>India</span>
                      </div>
                    </div>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          );
        })}
        <Pagination
          totalPosts={info.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
