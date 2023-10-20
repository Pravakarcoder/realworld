import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoriesData = [
  {
    id: "1",
    title: "school & collage",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "2",
    title: "Parking & Washing",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "3",
    title: "Water Suppliers",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "4",
    title: "Chasma Ghar",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "5",
    title: "Jewellery Shop",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "6",
    title: "Petrol & Diesels",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "7",
    title: "Offset Press",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "8",
    title: "Cyber",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "9",
    title: "Animal Farm",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "10",
    title: "Travel & Tourism",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "11",
    title: "Meat Shop",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "12",
    title: "Chasma Ghar",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "13",
    title: "Shoe Center",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "14",
    title: "Electricals",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "15",
    title: "Government Office",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: "16",
    title: "Aluminum  House",
    img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=750&q=80",
  },
];
const HomeCategories = () => {
  return (
    <>
      <div className="">
        <div className="bg-slate-200 h-1/2 mt-16 flex flex-wrap justify-center items-center space-x-7 gap-7">
          {CategoriesData.map((categorie, index) => (
            <div
              className="w-32 bg-transparent rounded overflow-hidden shadow-lg mt-4   mb-4 hover:-translate-y-[3px] duration-300"
              key={index}
            >
              <Image
                className="w-full p-3"
                src={categorie.img}
                alt="Card Image"
                width={1000}
                height={100}
              />
              <div className="">
                <p className="text-gray-700 text-sm text-center">
                  {categorie.title}
                </p>
              </div>
              <div className="px-6 py-1 flex justify-center">
                <button className="bg-orange-400 hover:bg-orange-700 duration-300 text-white font-bold py-2 px-4 rounded-full">
                  Search
                </button>
              </div>
            </div>
          ))}
          <Link href={`/categories`}>
            <button className="bg-orange-800 hover:bg-orange-700 duration-500 text-white font-bold py-3 px-14 mb-7 rounded-lg mt-16 ">
              View More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeCategories;
