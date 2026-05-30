const peopleGallery = (folder, files) => files.map((file) => `/people/${folder}/${file}`);
const productGallery = (folder, files) => files.map((file) => `/product/${folder}/${file}`);

function createWork({
  no,
  slug,
  title,
  category,
  type,
  year,
  location = "Seoul, South Korea",
  gallery,
  client,
  role = "Photography / Direction / Retouching",
  description,
  detail,
}) {
  return {
    no,
    slug,
    title,
    category,
    type,
    year,
    location,
    image: gallery[0],
    gallery,
    client,
    role,
    description,
    detail,
  };
}

const peopleDescription =
  "인물의 표정, 자세, 피부 톤, 빛의 방향을 중심으로 구성한 포트레이트 작업입니다. 과한 장식보다 인물의 태도와 장면의 밀도가 먼저 보이도록 정리했습니다.";

const peopleDetail =
  "촬영 전 무드와 의상 톤을 정리하고, 촬영 후에는 색감과 대비가 피사체의 분위기를 해치지 않도록 후보정 기준을 맞췄습니다. 프로필, 에디토리얼, 브랜드 인물 이미지로 확장 가능한 흐름입니다.";

const productDescription =
  "제품의 형태, 소재, 사용 장면, 브랜드 톤을 선명하게 보여주기 위해 구성한 제품 및 브랜드 이미지 작업입니다.";

const productDetail =
  "웹, SNS, 룩북, 상세페이지 등 다양한 매체에서 사용할 수 있도록 컷의 비율과 여백, 시선의 흐름을 고려했습니다. 제품 자체의 정보성과 저장하고 싶은 이미지성을 함께 목표로 두었습니다.";

export const works = [
  createWork({
    no: "001",
    slug: "personal-mood-archive",
    title: "Personal Mood Archive",
    category: "people",
    type: "Personal / Portrait",
    year: "2026",
    gallery: peopleGallery("1", ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]),
    client: "Personal Archive",
    role: "Photography / Mood Direction",
    description: peopleDescription,
    detail: peopleDetail,
  }),
  createWork({
    no: "002",
    slug: "soft-portrait-notes",
    title: "Soft Portrait Notes",
    category: "people",
    type: "Portrait / Profile",
    year: "2026",
    gallery: peopleGallery("2", ["1.jpg", "2.jpg"]),
    client: "Portrait Session",
    description: peopleDescription,
    detail: peopleDetail,
  }),
  createWork({
    no: "003",
    slug: "seoul-rain-archive",
    title: "Seoul Rain Archive",
    category: "people",
    type: "Street / Documentary",
    year: "2026",
    location: "Seongsu, Seoul",
    gallery: peopleGallery("3", ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]),
    client: "Archive Project",
    role: "Photography / Color Direction",
    description:
      "비 오는 서울의 거리감, 젖은 바닥의 반사, 흐린 자연광을 중심으로 기록한 도큐멘터리 기반의 스트리트 포토 프로젝트입니다.",
    detail:
      "일상적인 도시 장면을 브랜드 캠페인처럼 보이게 만드는 것이 아니라, 현실적인 온도와 거리의 습도를 유지하는 방향으로 구성했습니다. 자연스러운 대비와 색감을 기준으로 장면을 정리했습니다.",
  }),
  createWork({
    no: "004",
    slug: "studio-light-study",
    title: "Studio Light Study",
    category: "people",
    type: "Beauty / Concept",
    year: "2025",
    location: "Studio",
    gallery: peopleGallery("4", ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]),
    client: "Lighting Test",
    role: "Photography / Lighting Design",
    description:
      "스튜디오 조명, 피부 질감, 명암 대비를 중심으로 구성한 컨셉 라이트 스터디입니다.",
    detail:
      "강한 조명보다 피부에 자연스럽게 남는 하이라이트와 그림자의 밀도를 조절하는 데 집중했습니다. 뷰티, 프로필, 컨셉 촬영에 적용 가능한 조명 베이스를 실험한 작업입니다.",
  }),
  createWork({
    no: "005",
    slug: "monochrome-profile",
    title: "Studio Profile Session",
    category: "people",
    type: "Profile / Studio",
    year: "2025",
    location: "Studio",
    gallery: peopleGallery("5", ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]),
    client: "Profile Project",
    description: peopleDescription,
    detail: peopleDetail,
  }),
  createWork({
    no: "006",
    slug: "editorial-portrait-series",
    title: "Editorial Portrait Series",
    category: "people",
    type: "Portrait / Fashion",
    year: "2025",
    gallery: peopleGallery("6", [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
    ]),
    client: "Personal Project",
    role: "Photography / Direction / Retouching",
    description:
      "인물의 분위기와 스타일링, 빛의 질감을 중심으로 구성한 에디토리얼 포트레이트 시리즈입니다. 절제된 배경과 강한 타이포그래피 구조를 통해 인물의 존재감을 명확하게 보여주는 작업입니다.",
    detail:
      "촬영 전 무드보드 구성, 의상 톤 정리, 조명 방향 설정, 후보정 컬러 기준까지 하나의 시각 시스템으로 설계했습니다. 과한 연출보다 인물의 눈빛, 자세, 표정, 실루엣이 오래 남도록 구성했습니다.",
  }),
  createWork({
    no: "007",
    slug: "cookware-object-study",
    title: "Cookware Object Study",
    category: "product",
    type: "Product / Object",
    year: "2026",
    gallery: productGallery("1", ["1.JPG", "2.JPG", "3.JPG"]),
    client: "Product Study",
    role: "Photography / Styling / Retouching",
    description: productDescription,
    detail: productDetail,
  }),
  createWork({
    no: "008",
    slug: "compact-product-catalog",
    title: "Compact Product Catalog",
    category: "product",
    type: "Commerce / Catalog",
    year: "2026",
    gallery: productGallery("2", ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]),
    client: "Catalog Project",
    role: "Photography / Product Direction",
    description: productDescription,
    detail: productDetail,
  }),
  createWork({
    no: "009",
    slug: "visual-identity-shoot",
    title: "Visual Identity Shoot",
    category: "product",
    type: "Brand / Identity",
    year: "2025",
    gallery: productGallery("3", [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
    ]),
    client: "Identity Project",
    role: "Photography / Art Direction",
    description:
      "브랜드 또는 개인의 시각 정체성을 이미지로 정리하는 아이덴티티 촬영 프로젝트입니다.",
    detail:
      "프로필, 웹사이트, SNS, 포트폴리오 등 다양한 접점에서 일관되게 사용 가능한 이미지 시스템을 목표로 작업했습니다.",
  }),
  createWork({
    no: "010",
    slug: "tabletop-product-study",
    title: "Tabletop Product Study",
    category: "product",
    type: "Product / Still Life",
    year: "2025",
    gallery: productGallery("4", ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]),
    client: "Still Life Project",
    description: productDescription,
    detail: productDetail,
  }),
  createWork({
    no: "011",
    slug: "object-detail-archive",
    title: "Object Detail Archive",
    category: "product",
    type: "Object / Detail",
    year: "2025",
    gallery: productGallery("5", [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
    ]),
    client: "Detail Archive",
    description: productDescription,
    detail: productDetail,
  }),
  createWork({
    no: "012",
    slug: "material-light-test",
    title: "Material Light Test",
    category: "product",
    type: "Material / Lighting",
    year: "2025",
    gallery: productGallery("6", ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]),
    client: "Lighting Test",
    role: "Photography / Lighting Design",
    description: productDescription,
    detail: productDetail,
  }),
  createWork({
    no: "013",
    slug: "brand-campaign-visual",
    title: "Brand Campaign Visual",
    category: "product",
    type: "Commercial / Brand",
    year: "2025",
    location: "Studio / Seoul",
    gallery: productGallery("7", ["1.JPG", "2.jpg", "3.JPG", "4.jpg"]),
    client: "Brand Campaign",
    role: "Photography / Visual Direction",
    description:
      "브랜드의 제품, 인물, 공간 무드를 하나의 캠페인 이미지로 정리한 커머셜 비주얼 작업입니다.",
    detail:
      "SNS, 웹사이트, 룩북, 상세페이지 등 다양한 채널에서 사용할 수 있도록 이미지의 확장성을 고려했습니다. 브랜드의 톤앤매너를 해치지 않으면서도 저장 가치가 높은 비주얼을 목표로 설계했습니다.",
  }),
  createWork({
    no: "014",
    slug: "product-surface-study",
    title: "Product Surface Study",
    category: "product",
    type: "Product / Surface",
    year: "2025",
    gallery: productGallery("8", ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]),
    client: "Surface Study",
    description: productDescription,
    detail: productDetail,
  }),
  createWork({
    no: "015",
    slug: "lookbook-direction",
    title: "Lookbook Direction",
    category: "product",
    type: "Fashion / Lookbook",
    year: "2024",
    gallery: productGallery("9", ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]),
    client: "Fashion Lookbook",
    role: "Photography / Lookbook Direction",
    description:
      "패션 룩북을 위한 착장, 포즈, 구도, 이미지 흐름을 설계한 비주얼 디렉션 작업입니다.",
    detail:
      "단순 착장 기록이 아니라 브랜드가 보여주고 싶은 태도와 소비자가 저장하고 싶은 이미지를 동시에 고려했습니다. 웹, SNS, 카탈로그 활용성을 전제로 구성했습니다.",
  }),
  createWork({
    no: "016",
    slug: "minimal-product-set",
    title: "Minimal Product Set",
    category: "product",
    type: "Product / Set",
    year: "2024",
    gallery: productGallery("10", ["1.jpg", "2.jpg", "3.jpg"]),
    client: "Product Set",
    description: productDescription,
    detail: productDetail,
  }),
];

export function getWorkBySlug(slug) {
  return works.find((work) => work.slug === slug);
}

export function getWorksByCategory(category) {
  return works.filter((work) => work.category === category);
}

export function getNextWork(currentSlug) {
  const currentIndex = works.findIndex((work) => work.slug === currentSlug);
  const nextIndex = currentIndex === works.length - 1 ? 0 : currentIndex + 1;

  return works[nextIndex];
}
