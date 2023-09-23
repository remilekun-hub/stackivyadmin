import { useState, useEffect } from "react";
import PendingTable from "@/components/Tables/PendingTable";
import Navbar from "../components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ColumnDef } from "@tanstack/react-table";
import glassIcon2 from "../assets/search-two.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  CheckCircle2,
  XCircle,
  PencilLine,
  Eye,
  Ban,
} from "lucide-react";
import ContactedTable from "@/components/Tables/ContactedTable";
import axios from "axios";
import toast from "react-hot-toast";
import { QuoteType, base_url } from "../../types";
import { userSlice } from "@/Hooks/user";
import { useNavigate } from "react-router-dom";
import Modal from "@/components/Modal";

function Quote() {
  const user = userSlice((state) => state.user);
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const [openfeedback, setOpenFeedack] = useState(false);
  const [viewMessage, setViewMessage] = useState(false);
  const [dropFeedback, setDropFeedback] = useState(false);
  const navigate = useNavigate();
  const pending = quotes.filter((q) => q.status === "pending");
  const closed = quotes.filter((q) => q.status === "closed");
  const contacted = quotes.filter((q) => q.status === "contacted");
  const failed = quotes.filter((q) => q.status === "failed");
  const [singlePendingData, setSinglePendingData] = useState<QuoteType>();
  const [feedbackText, setFeedBackText] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const columns: ColumnDef<QuoteType>[] = [
    { accessorKey: "first_name", header: "FIRST NAME" },
    { accessorKey: "last_name", header: "LAST NAME" },
    { accessorKey: "phone", header: "Mobile NUMBER" },
    { accessorKey: "email", header: "EMAIL" },
    {
      accessorKey: "products",
      header: "PRODUCTS",
      cell: ({ row }) => {
        const quote = row.original;
        return <span>{quote.products.join(", ")}</span>;
      },
    },
    { accessorKey: "category", header: "CATEGORY" },
    {
      accessorKey: "message",
      header: "messsage",
      cell: ({ row }) => {
        const quote = row.original;
        return (
          <span
            className="underline text-[#116B89]"
            onClick={() => {
              const singleQuote = quotes.find(
                (p) => p.quote_id === quote.quote_id
              );
              if (singleQuote) {
                setSinglePendingData(singleQuote);
                setViewMessage(true);
              }
            }}
          >
            View Message
          </span>
        );
      },
    },
    {
      id: "actions",
      header: "ACTION",
      cell: ({ row }) => {
        const quote = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="cursor-pointer flex items-center text-black  gap-3 mb-1"
                onClick={() => movetoContacted(quote.quote_id)}
              >
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span className="text-black ml-1">Move to Contacted</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer flex items-center gap-4 mb-1"
                onClick={() => movetoClosed(quote.quote_id)}
              >
                <XCircle className="w-4 h-4 text-[#FFCA0D]" />
                <span className="text-black">Move to Closed Deals</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer flex items-center gap-4 mb-1"
                onClick={() => movetoFailed(quote.quote_id)}
              >
                <Ban className="w-4 h-4 text-red-500" />
                <span className="text-black">Move to Failed Deals</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer flex items-center gap-4 mb-1">
                <PencilLine className="w-4 h-4 text-black" />
                <span
                  className="text-black"
                  onClick={() => {
                    const singleQuote = quotes.find(
                      (p) => p.quote_id === quote.quote_id
                    );
                    if (singleQuote) {
                      setSinglePendingData(singleQuote);
                      setDropFeedback(true);
                    }
                  }}
                >
                  Drop Feedback
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  const contactedCol: ColumnDef<QuoteType>[] = [
    { accessorKey: "first_name", header: "FIRST NAME" },
    { accessorKey: "last_name", header: "LAST NAME" },
    { accessorKey: "phone", header: "Mobile NUMBER" },
    { accessorKey: "email", header: "EMAIL" },
    {
      accessorKey: "products",
      header: "PRODUCTS",
      cell: ({ row }) => {
        const quote = row.original;
        return <span>{quote.products.join(", ")}</span>;
      },
    },
    { accessorKey: "category", header: "CATEGORY" },
    {
      accessorKey: "message",
      header: "messsage",
      cell: ({ row }) => {
        const quote = row.original;
        return (
          <span
            className="underline text-[#116B89]"
            onClick={() => {
              const singleQuote = quotes.find(
                (p) => p.quote_id === quote.quote_id
              );
              if (singleQuote) {
                setSinglePendingData(singleQuote);
                setViewMessage(true);
              }
            }}
          >
            View Message
          </span>
        );
      },
    },

    {
      id: "actions",
      header: "ACTION",
      cell: ({ row }) => {
        const quote = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="cursor-pointer flex items-center gap-4 mb-1"
                onClick={() => movetoClosed(quote.quote_id)}
              >
                <XCircle className="w-4 h-4 text-[#FFCA0D]" />
                <span className="text-black">Move to Closed Deals</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer flex items-center gap-4 mb-1"
                onClick={() => movetoFailed(quote.quote_id)}
              >
                <Ban className="w-4 h-4 text-red-500" />
                <span className="text-black">Move to Failed Deals</span>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <div
                  className="cursor-pointer flex items-center gap-4 mb-1"
                  onClick={() => {
                    const singleQuote = quotes.find(
                      (p) => p.quote_id === quote.quote_id
                    );
                    if (singleQuote) {
                      setSinglePendingData(singleQuote);
                      setOpenFeedack(true);
                    }
                  }}
                >
                  <Eye className="w-4 h-4 text-black" />
                  <span className="text-black">View Feedback</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  const closedCol: ColumnDef<QuoteType>[] = [
    { accessorKey: "first_name", header: "FIRST NAME" },
    { accessorKey: "last_name", header: "LAST NAME" },
    { accessorKey: "phone", header: "Mobile NUMBER" },
    { accessorKey: "email", header: "EMAIL" },
    {
      accessorKey: "products",
      header: "PRODUCTS",
      cell: ({ row }) => {
        const quote = row.original;
        return <span>{quote.products.join(", ")}</span>;
      },
    },
    { accessorKey: "category", header: "CATEGORY" },
    {
      accessorKey: "message",
      header: "messsage",
      cell: ({ row }) => {
        const quote = row.original;

        return (
          <span
            className="underline text-[#116B89]"
            onClick={() => {
              const singleQuote = quotes.find(
                (p) => p.quote_id === quote.quote_id
              );
              if (singleQuote) {
                setSinglePendingData(singleQuote);
                setViewMessage(true);
              }
            }}
          >
            View Message
          </span>
        );
      },
    },
    {
      id: "actions",
      header: "ACTION",
      cell: ({ row }) => {
        const quote = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <div
                  className="cursor-pointer flex items-center gap-4 mb-1"
                  onClick={() => {
                    const singleQuote = quotes.find(
                      (p) => p.quote_id === quote.quote_id
                    );
                    if (singleQuote) {
                      setSinglePendingData(singleQuote);
                      setOpenFeedack(true);
                    }
                  }}
                >
                  <PencilLine className="w-4 h-4 text-black" />
                  <span className="text-black">View Feedback</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const failedCol: ColumnDef<QuoteType>[] = [
    { accessorKey: "first_name", header: "FIRST NAME" },
    { accessorKey: "last_name", header: "LAST NAME" },
    { accessorKey: "phone", header: "Mobile NUMBER" },
    { accessorKey: "email", header: "EMAIL" },
    {
      accessorKey: "products",
      header: "PRODUCTS",
      cell: ({ row }) => {
        const quote = row.original;
        return <span>{quote.products.join(", ")}</span>;
      },
    },
    { accessorKey: "category", header: "CATEGORY" },
    {
      accessorKey: "message",
      header: "messsage",
      cell: ({ row }) => {
        const quote = row.original;
        return (
          <span
            className="underline text-[#116B89]"
            onClick={() => {
              const singleQuote = quotes.find(
                (p) => p.quote_id === quote.quote_id
              );
              if (singleQuote) {
                setSinglePendingData(singleQuote);
                setViewMessage(true);
              }
            }}
          >
            View Message
          </span>
        );
      },
    },
    {
      id: "actions",
      header: "ACTION",
      cell: ({ row }) => {
        const quote = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <div
                  className="cursor-pointer flex items-center gap-4 mb-1"
                  onClick={() => {
                    const singleQuote = quotes.find(
                      (p) => p.quote_id === quote.quote_id
                    );
                    if (singleQuote) {
                      setSinglePendingData(singleQuote);
                      setOpenFeedack(true);
                    }
                  }}
                >
                  <PencilLine className="w-4 h-4 text-black" />
                  <span className="text-black">View Feedback</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const movetoContacted = async (quoteId: string) => {
    try {
      toast.loading("updating quote status to contacted", {
        id: "Contactedquotes",
      });
      const { data } = await axios.patch(
        `${base_url}/api/v1/stackivy/admin/quote/update/status/${quoteId}`,
        { status: "contacted" },
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      );

      if (data.code === 200) {
        toast.success("update successful", { id: "Contactedquotes" });
        setTimeout(() => {
          navigate(0);
        }, 3000);
      }
      if (data.code !== 200) {
        toast.error("couldn't update quote Status", { id: "Contactedquotes" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const movetoClosed = async (quoteId: string) => {
    try {
      toast.loading("updating quote status to closed", {
        id: "Closedquotes",
      });
      const { data } = await axios.patch(
        `${base_url}/api/v1/stackivy/admin/quote/update/status/${quoteId}`,
        { status: "closed" },
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      );

      if (data.code === 200) {
        toast.success("update successful", { id: "Closedquotes" });
        setTimeout(() => {
          navigate(0);
        }, 3000);
      }
      if (data.code !== 200) {
        toast.error("couldn't update quote Status", { id: "Closedquotes" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const movetoFailed = async (quoteId: string) => {
    try {
      toast.loading("updating quote status to failed", {
        id: "failedquotes",
      });
      const { data } = await axios.patch(
        `${base_url}/api/v1/stackivy/admin/quote/update/status/${quoteId}`,
        { status: "failed" },
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      );

      if (data.code === 200) {
        toast.success("update successful", { id: "failedquotes" });
        setTimeout(() => {
          navigate(0);
        }, 3000);
      }
      if (data.code !== 200) {
        toast.error("couldn't update quote Status", { id: "failedquotes" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const getQuotes = async () => {
      try {
        toast.loading("Getting Quotes", { id: "quotes" });
        const { data } = await axios.get(
          `${base_url}/api/v1/stackivy/admin/quote/get_quote`,
          {
            headers: { Authorization: `Bearer ${user?.token}` },
            signal: controller.signal,
          }
        );

        if (data.code === 200) {
          toast.success("Request Successful", { id: "quotes" });

          setQuotes(data.quotes);
        }
        if (data.code !== 200) {
          toast.error("coludn't fetch quotes", { id: "quotes" });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getQuotes();
    return () => {
      toast.dismiss("quotes");
      toast.dismiss("Contactedquotes");
      toast.dismiss("Closedquotes");
      toast.dismiss("failedquotes");
      controller.abort();
    };
  }, []); //eslint-disable-line

  const PendingModal = () => (
    <Modal>
      <div className="bg-white rounded-[16px] h-[300px] p-7 w-[808px]">
        <div className="flex justify-between items-center mb-5">
          {/* <h1 className="text-black font-semibold">Investment and Planning</h1> */}
          <div></div>
          <XCircle
            className="w-4 h-4 text-gray-400 cursor-pointer"
            onClick={() => setViewMessage(false)}
          />
        </div>
        <div>
          <p className="text-[#818181]">{singlePendingData?.message}</p>
        </div>
      </div>
    </Modal>
  );

  const FeedBackModal = () => (
    <Modal>
      <div className="bg-white rounded-[16px] h-[300px] p-7 w-[808px]">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-black font-semibold">Feedback</h1>
          <XCircle
            className="w-4 h-4 text-gray-400 cursor-pointer"
            onClick={() => setOpenFeedack(false)}
          />
        </div>
        <div>
          <p className="text-[#818181]">{singlePendingData?.feedback}</p>
        </div>
      </div>
    </Modal>
  );

  const sendFeedBack = async () => {
    if (!feedbackText) return;
    try {
      setIsLoading("loading");
      const { data } = await axios.patch(
        `${base_url}/api/v1/stackivy/admin/quote/update/feedback/${singlePendingData?.quote_id}`,
        { feedback: feedbackText },
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      );
      if (data.code === 200) {
        setIsLoading("loaded");
      }
    } catch (error) {
      console.log(error);
      setIsLoading("error");
    } finally {
      setTimeout(() => {
        setFeedBackText("");
        setIsLoading("");
      }, 3000);
    }
  };

  return (
    <section className="">
      {openfeedback && <FeedBackModal />}
      {viewMessage && <PendingModal />}
      {dropFeedback && (
        <div className="flex w-screen h-screen items-center justify-center bg-black/70 fixed inset-0 z-[99999999]">
          <div className="bg-white rounded-[16px] h-[320px] p-7 pb-8 w-[808px]">
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-black font-semibold">Feedback</h1>
              <XCircle
                className="w-4 h-4 text-gray-400 cursor-pointer"
                onClick={() => {
                  setDropFeedback(false);
                  setFeedBackText("");
                }}
              />
            </div>
            <div>
              <textarea
                className="w-full outline-none border-[1px] h-[140px] p-2 border-[#E9E9E9] rounded-[8px] mb-5"
                value={feedbackText}
                onChange={(e) => setFeedBackText(e.target.value)}
              />
              <button
                className="bg-[#116B89] text-wite mb-2 px-5 text-white py-2 rounded-full"
                onClick={sendFeedBack}
                disabled={!feedbackText}
              >
                Post Feedback
              </button>
              {isLoading == "loading" ? (
                <p className="pb-4 ml-2">Processing...</p>
              ) : isLoading == "loaded" ? (
                <p className="pb-4 ml-2">Feedback Updated</p>
              ) : isLoading == "error" ? (
                <p className="pb-4 ml-2 text-error-500">
                  couldn't update feedback
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}

      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Quotes</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] h-screen p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] mx-auto  bg-white rounded-[16px] border-[1px] h-full border-[#F3F4F6] p-7">
          <div>
            <Tabs defaultValue="pending">
              <div className="flex justify-between flex-wrap items-center gap-5 border-b-[1px] border-[#F3F4F6]">
                <TabsList className="flex justify-start gap-[40px] ">
                  <TabsTrigger
                    value="pending"
                    className="text-[14px] py-4 leading-5 px-0"
                  >
                    Pending
                  </TabsTrigger>
                  <TabsTrigger
                    value="contacted"
                    className="text-[14px] py-4 leading-5 px-0"
                  >
                    Contacted
                  </TabsTrigger>
                  <TabsTrigger
                    value="closed-deals"
                    className="text-[14px] py-4 leading-5 px-0"
                  >
                    Closed Deals
                  </TabsTrigger>
                  <TabsTrigger
                    value="failed-deals"
                    className="text-[14px] py-4 leading-5 px-0"
                  >
                    Failed Deals
                  </TabsTrigger>
                </TabsList>
                <div>
                  <div className=" flex items-center gap-3 border-[1px] border-[#F3F4F6] pl-4 rounded-[4px] overflow-hidden">
                    <img src={glassIcon2} className="w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search for something here"
                      className="p-3 outline-0 border-0 text-black  placeholder:text-[#9CA3AF]  w-[250px]"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <TabsContent value="pending" className="pb-2">
                  <PendingTable columns={columns} data={pending} />
                </TabsContent>
                <TabsContent value="contacted" className="pb-2">
                  <ContactedTable columns={contactedCol} data={contacted} />
                </TabsContent>
                <TabsContent value="closed-deals" className="pb-2">
                  <ContactedTable columns={closedCol} data={closed} />
                </TabsContent>
                <TabsContent value="failed-deals" className="pb-2">
                  <ContactedTable columns={failedCol} data={failed} />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Quote;
