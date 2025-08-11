import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Input,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownTrigger,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Badge,
  NavbarMenuToggle,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "../public/logo.svg";
import categories from "../public/categories.svg";
import cart from "../public/cart.svg";
import account from "../public/account.svg";
import setting from "../public/setting-2.svg";
import SearchIcon from "./searchIcon";
import Account from "../public/acount-2.svg";
import drop from "../public/drop.svg";
import savedIcon from "../public/saved.svg";
import Orders from "../public/orders.svg";
import { useContext } from "react";
import { AppContext } from "@/utils/AppContext";
import { useRouter } from "next/router";
import logout from "../public/logout copy.svg";
import ProductCard from "./productCard";

export default function Nav() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const router = useRouter();
  const { cartItems, list, setIsNavOpen, isNavOpen, savedItems, count } = useContext(AppContext);
  const userDetails = typeof window !== "undefined" ? window.localStorage.getItem("user") : false;
  const user = JSON.parse(userDetails as string);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const farmerDetails = typeof window !== "undefined" ? window.localStorage.getItem("farmer") : false;
  const farmer = JSON.parse(farmerDetails as string);

  const filteredList = list.filter((item: any) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setSearchQuery(category === selectedCategory ? "" : category);
  };

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const categoryList = [
    { id: 1, name: "Fruits", category: "Fruits" },
    { id: 2, name: "Dairy", category: "Dairy" },
    { id: 3, name: "Vegetables", category: "Vegetables" },
    { id: 4, name: "Grains", category: "Grains" },
    { id: 5, name: "Tubers", category: "Tubers" },
    { id: 6, name: "Fertilizers", category: "Fertilizers" },
  ];

  const handleDropdownClick = () => {
    if (!user) {
      router.push("/auth/signIn");
    } else {
      setDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <Navbar
      maxWidth="xl"
      className="justify-around shadow px-3 bg-white p-0 md:px-6 top-[0]"
    >
      {router.pathname.includes("/seller") && (
        <NavbarMenuToggle
          className="flex md:hidden"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
        />
      )}
      <NavbarBrand
        className="w-fit flex-grow-[0.2] md:flex-grow-[0.6]"
        as={Link}
        href="/"
      >
        <Image src={logo} alt="logo" width={35} height={45} />
        <p className="flex text-3xl font-bold text-[#A46E05] ">KASUWA</p>
      </NavbarBrand>
      <NavbarContent className="md:flex-grow-[1] flex-grow-[1.2] ">
        <NavbarItem
          className="bg-white rounded-md md:m-0 ml-auto border md:w-full w-[50px] cursor-pointer"
          onClick={onOpen}
        >
          <Input
            startContent={<SearchIcon />}
            className="text-black w-full m-auto border border-[#A46E05] rounded-[7px] bg-white cursor-pointer"
            radius="md"
            style={{
              paddingTop: "7px",
              paddingBottom: "7px",
              width: "100%",
              borderColor: "#A46E05",
              background: "white",
              cursor: "pointer",
            }}
            placeholder="Search"
          />
        </NavbarItem>
        <Button className="bg-[#A46E05BD] rounded-md px-3 py-[6px] text-white hidden md:flex">
          Search
        </Button>
      </NavbarContent>

      <NavbarContent
        as="div"
        justify="end"
        className="trigger md:flex-grow-[0.4] flex-grow-[0.3]"
      >
        <Dropdown
          className=""
          placement="bottom-end"
          onClick={handleDropdownClick}
        >
          <DropdownTrigger>
            <div className="flex gap-2 justify-between items-center cursor-pointer">
              <Image
                className="transition-transform"
                src={Account}
                width={25}
                height={25}
                alt="account"
              />
              <span className="hidden md:flex">Account</span>
              <Image
                className="transition-transform mt-1"
                src={drop}
                width={10}
                height={10}
                alt=""
              />
            </div>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            className="bg-white rounded-md p-3 flex flex-col gap-[2px]"
          >
            <DropdownItem
              variant="flat"
              className={`${user && "nav-no-space"} p-0`}
              key="sign in"
            >
              {!user && (
                <Link className="text-black w-full" href={"/auth/signIn"}>
                  <Button className="w-full text-white bg-[#A46E05BD] py-2 rounded-md">
                    Sign In
                  </Button>
                </Link>
              )}
            </DropdownItem>

            <DropdownItem
              variant="flat"
              className={`${user && "nav-no-space"} my-1 p-0 w-full`}
              key="sign up"
            >
              {!user && (
                <Link className="text-black w-full" href={"/auth/signup"}>
                  <Button className="w-full bg-[#A46E05BD] text-white py-2 rounded-md">
                    Sign Up
                  </Button>
                </Link>
              )}
            </DropdownItem>
            <DropdownItem
              className={`${farmer && "nav-no-space"} p-0 flex lg:hidden`}
            >
              <div>
                {!farmer ? (
                  <div className="flex gap-[6px] justify-start items-center">
                    <Button
                      as={Link}
                      href="/seller/sellerForm"
                      className="bg-[green] rounded-md py-[6px] text-white px-3 w-full"
                    >
                      Become a seller
                    </Button>
                  </div>
                ) : (
                  <div className="flex gap-[6px] justify-start items-center">
                    <Link className="text-black" href="/seller/dashboard">
                      <Button className="bg-[green] rounded-md px-3 py-[6px] text-white hidden md:flex">
                        seller dashboard
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </DropdownItem>
            <DropdownItem
              className={`${farmer && "nav-no-space"} p-0 flex `}
            >
              <div>
                {!farmer && (
                  <div className="flex gap-[6px] justify-start items-center">
                    <Button
                      as={Link}
                      href="/seller/sellerLogin"
                      className="bg-[green] rounded-md py-[6px] text-white px-3 w-full"
                    >
                      Sign In as a seller
                    </Button>
                  </div>
                )}
              </div>
            </DropdownItem>
            <DropdownItem
              variant="flat"
              className={`${!user && "no-space"} py-2 w-full`}
              key="account"
            >
              {user && (
                <div className="flex gap-1 justify-start items-center">
                  <Image src={account} alt="logo" width={20} height={20} />
                  <span>
                    <Link className="text-black" href="/account">
                      My Account
                    </Link>
                  </span>
                </div>
              )}
            </DropdownItem>
            <DropdownItem
              variant="flat"
              className={`${!user && "no-space"} py-2 w-full`}
              key="settings"
            >
              {user && (
                <div className="flex gap-1 justify-start items-center">
                  <Image src={Orders} alt="logo" width={20} height={20} />
                  <span>
                    <Link className="text-black" href={"#"}>
                      My Orders
                    </Link>
                  </span>
                </div>
              )}
            </DropdownItem>
            <DropdownItem
              variant="flat"
              className="py-2 w-full"
              key="saved items"
            >
              <div className="flex gap-2 justify-start items-center">
                {savedItems?.length > 0 ? (
                  <Badge
                    className="bg-[#A46E05] bg-opacity-100 text-white p-1 pt-1 z-10 mt-[5px] opacity-100"
                    color="primary"
                    content={savedItems.length}
                  >
                    <Image src={savedIcon} alt="logo" width={19} height={20} />
                  </Badge>
                ) : (
                  <Image src={savedIcon} alt="logo" width={19} height={20} />
                )}
                <span>
                  <Link className="text-black" href={"/savedItems"}>
                    Saved Items
                  </Link>
                </span>
              </div>
            </DropdownItem>
            <DropdownItem
              variant="flat"
              className="myDropItem flex md:hidden py-1"
            >
              <div className="flex gap-2 justify-start items-center">
                {cartItems?.length > 0 ? (
                  <Badge
                    className="bg-[#A46E05] bg-opacity-100 text-white p-1 pt-0 z-10 mt-[2px] opacity-100"
                    color="primary"
                    content={cartItems.length}
                  >
                    <Image src={cart} alt="logo" width={21} height={20} />
                  </Badge>
                ) : (
                  <Image src={cart} alt="logo" width={21} height={20} />
                )}
                <span>
                  <Link className="text-black" href={"/cart"}>
                    Cart
                  </Link>
                </span>
              </div>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                localStorage.removeItem("user");
                router.push("/");
              }}
              variant="flat"
              className={`${!user && "no-space"} py-2`}
              key="logout"
              color="danger"
            >
              {user && (
                <div className="flex gap-1 justify-start items-center">
                  <Image src={logout} alt="logo" width={21} height={20} />
                  <span>Logout</span>
                </div>
              )}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarItem className="hidden md:flex">
        <div className="flex gap-[6px] justify-start items-center">
          {cartItems.length > 0 ? (
            <Badge
              className="bg-[#A46E05BD] text-white p-1 pt-0 z-10 mt-[1px]"
              color="primary"
              content={cartItems.length}
              variant="flat"
            >
              <Image src={cart} alt="logo" width={21} height={20} />
            </Badge>
          ) : (
            <Image
              src={cart}
              className="pt-0"
              alt="logo"
              width={21}
              height={20}
            />
          )}
          <span>
            <Link className="text-black" href={"/cart"}>
              Cart
            </Link>
          </span>
        </div>
      </NavbarItem>
      <NavbarItem className="hidden md:flex">
        <div>
          {!farmer ? (
            <div className="flex gap-[6px] justify-start items-center">
              <Button
                as={Link}
                href="/seller/sellerForm"
                className="bg-[green] rounded-md py-[6px] text-white px-3 w-full"
              >
                Become a seller
              </Button>
            </div>
          ) : (
            <div className="flex gap-[6px] justify-start items-center">
              <Link className="text-black" href="/seller/dashboard">
                <Button className="bg-[green] rounded-md px-3 py-[6px] text-white hidden md:flex">
                  seller dashboard
                </Button>
              </Link>
            </div>
          )}
        </div>
      </NavbarItem>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        backdrop="blur"
        className="h-screen max-h-[unset] w-[95%] md:max-h-[60vh]"
        size={"3xl"}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <Input
                  autoFocus
                  endContent={<SearchIcon />}
                  placeholder="search for products"
                  variant="bordered"
                  className="text-black mt-5"
                  onChange={handleSearchChange}
                  value={searchQuery}
                />
              </ModalHeader>
              <ModalBody>
                <div className="w-full flex justify-between items-center">
                  <div className="flex flex-col gap-3 w-full">
                    <div className="grid grid-cols-4 gap-4 px-6 w-full">
                      {categoryList.map((item: any) => (
                        <div key={item.id}>
                          <button
                            className={`w-28 py-3 rounded-lg backdrop-blur-md text-black relative
                              ${
                                selectedCategory === item.category
                                  ? item.id % 2 === 0
                                    ? "bg-green-500/40"
                                    : item.id === 5
                                    ? "bg-yellow-500/20"
                                    : item.id === 6
                                    ? "bg-green-500/20"
                                    : "bg-yellow-500/50"
                                  : "bg-gray-200"
                              }`}
                            onClick={() => handleCategoryChange(item.category)}
                          >
                            {item.name}
                            {selectedCategory === item.category && (
                              <span className="absolute right-2 top-1/2 -translate-y-1/2">
                                ✓
                              </span>
                            )}
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] w-full gap-x-[1.50rem] gap-y-4 pt-10 max-w-[1280px] px-6 py-5 mx-auto">
                      {filteredList.map(
                        (
                          items: {
                            images: any;
                            originalPrice: string;
                            saleScale: string;
                            name: string;
                            _id: string;
                            stock: string;
                          },
                          index: number
                        ) => (
                          <ProductCard
                            _id={items._id}
                            item={items}
                            key={index}
                            src={items.images[0].url}
                            index={index}
                            originalPrice={items.originalPrice}
                            title={items.name}
                            count={count}
                            stock={items.stock}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
                {filteredList.length <= 0 && (
                  <div className="flex justify-center items-center w-full">
                    <p>No item matches your search !!</p>
                  </div>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </Navbar>
  );
}