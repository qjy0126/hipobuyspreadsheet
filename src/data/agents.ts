export type Agent = {
  slug: string;
  name: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  strengths: string[];
};

export const agents: Agent[] = [
  {
    slug: "hipobuy",
    name: "Hipobuy",
    summary:
      "China shopping agent popular for streetwear hauls — paste Weidian / Taobao / 1688 links, review warehouse QC, then ship internationally.",
    seoTitle: "Hipobuy Agent Guide — How Spreadsheet Links Work",
    seoDescription:
      "How to use Hipobuy with Findsheet spreadsheet links: paste product URLs, review QC photos, choose a shipping line, and track your parcel.",
    strengths: ["QC photos", "Multi-marketplace buying", "International shipping lines"],
  },
  {
    slug: "cnfans",
    name: "CNFans",
    summary:
      "Compatible agent for the same marketplace links — useful when you want a second quote on item fees or shipping.",
    seoTitle: "CNFans with Hipobuy Spreadsheet Links",
    seoDescription:
      "Use Findsheet Hipobuy spreadsheet finds with CNFans. Same Weidian / Taobao / 1688 links, different agent checkout path.",
    strengths: ["Agent alternative", "Shared listing links", "Haul consolidation"],
  },
  {
    slug: "kakobuy",
    name: "Kakobuy",
    summary:
      "Another agent option for Findsheet directory links — compare fees before you commit item payment.",
    seoTitle: "Kakobuy + Hipobuy Spreadsheet Finds",
    seoDescription:
      "Paste Findsheet product links into Kakobuy. Independent directory guidance for QC checks and shipping planning.",
    strengths: ["Link paste workflow", "Fee comparison", "QC review"],
  },
  {
    slug: "mulebuy",
    name: "Mulebuy",
    summary:
      "Beginner-friendly agent path for the same spreadsheet finds — still verify every live listing yourself.",
    seoTitle: "Mulebuy Compatible Hipobuy Spreadsheet Links",
    seoDescription:
      "Findsheet listings work with Mulebuy. Browse finds here, confirm source pages, then submit links to your agent.",
    strengths: ["Beginner flow", "Compatible links", "Warehouse QC"],
  },
  {
    slug: "sugargoo",
    name: "Sugargoo",
    summary:
      "Long-running agent option — use Findsheet for discovery, Sugargoo for purchasing and freight.",
    seoTitle: "Sugargoo with Findsheet Hipobuy Spreadsheet",
    seoDescription:
      "Discover products on Findsheet, purchase through Sugargoo. Directory prices are estimates — confirm on the source listing.",
    strengths: ["Established agent", "Shipping options", "QC workflow"],
  },
  {
    slug: "allchinabuy",
    name: "AllChinaBuy",
    summary:
      "Multi-agent shoppers keep AllChinaBuy as a backup quote for weight-sensitive parcels.",
    seoTitle: "AllChinaBuy + Spreadsheet Product Links",
    seoDescription:
      "Paste Findsheet Hipobuy spreadsheet links into AllChinaBuy. Independent discovery — not operated by any agent.",
    strengths: ["Backup agent", "Parcel quotes", "Link compatible"],
  },
];

export function getAgent(slug: string): Agent | undefined {
  return agents.find((a) => a.slug === slug);
}
