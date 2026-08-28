const JsonLd = ({ data }) => {
  const blocks = Array.isArray(data) ? data : [data];

  return blocks.map((item, index) => (
    <script
      key={`${item["@type"]}-${index}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
    />
  ));
};

export default JsonLd;
