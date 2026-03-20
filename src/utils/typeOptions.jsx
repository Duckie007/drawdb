import { DB } from "../data/constants";

const TYPE_NOTES = {
  BFILE: "Oracle 外部二进制文件引用，存路径不存内容",
  BIGINT: "大范围整数，适合大数据量 ID 和计数",
  BIGSERIAL: "大范围自增整数，PostgreSQL 常用主键",
  BINARY: "定长二进制数据",
  BIT: "位字段，适合布尔位或掩码",
  BLOB: "二进制大对象，适合文件和图片",
  BOOLEAN: "布尔值，只有真或假",
  BOX: "矩形框，PostgreSQL 几何类型",
  BYTEA: "PostgreSQL 二进制数据类型",
  CHAR: "定长字符串，适合固定长度编码",
  CIDR: "IP 网段地址，适合网络配置",
  CIRCLE: "圆形几何对象，PostgreSQL 专用",
  CLOB: "大文本对象，适合长文内容",
  CURSOR: "游标引用，常用于 Oracle 存储过程",
  DATE: "日期，不含时间",
  DATETIME: "日期时间，常用于业务记录时间",
  DATETIME2: "高精度日期时间，SQL Server 推荐",
  DATETIMEOFFSET: "带时区偏移的日期时间",
  DECIMAL: "高精度定点数，适合金额",
  DOUBLE: "双精度浮点数，适合近似计算",
  "DOUBLE PRECISION": "双精度浮点数，精度高于 REAL",
  ENUM: "枚举值，只能取预定义选项",
  FLOAT: "浮点数，适合近似数值",
  GEOMETRY: "通用空间几何对象",
  GEOMETRYCOLLECTION: "多个几何对象的集合",
  HALFVEC: "半精度向量，适合向量检索降内存",
  IMAGE: "旧版二进制图片类型，SQL Server 历史兼容",
  INET: "IP 地址，支持 IPv4 和 IPv6",
  INET4: "IPv4 地址类型，MariaDB 扩展",
  INET6: "IPv6 地址类型，MariaDB 扩展",
  INT: "标准整数，通用整型字段",
  INTEGER: "标准整数，最常用的整型字段",
  INTERVAL: "时间间隔，适合时长和偏移量",
  JSON: "JSON 文档，适合半结构化数据",
  JSONB: "二进制 JSON，PostgreSQL 查询性能更好",
  LINE: "无限直线，PostgreSQL 几何类型",
  LINESTRING: "线段路径，空间地理类型",
  LONG: "长文本/长数值历史类型，兼容场景使用",
  LONGBLOB: "超大二进制对象",
  LONGTEXT: "超大文本内容",
  LSEG: "线段，PostgreSQL 几何类型",
  MACADDR: "MAC 地址",
  MACADDR8: "EUI-64 / 8 字节 MAC 地址",
  MEDIUMBLOB: "中等大小二进制对象",
  MEDIUMINT: "中等范围整数，MySQL 专用",
  MEDIUMTEXT: "中等长度文本",
  MONEY: "货币金额类型，适合财务数据",
  MULTILINESTRING: "多条线段集合",
  MULTIPOINT: "多个点的集合",
  MULTIPOLYGON: "多个多边形集合",
  NCHAR: "定长 Unicode 字符串",
  NCLOB: "Unicode 大文本对象",
  NTEXT: "旧版 Unicode 长文本，SQL Server 历史兼容",
  NUMBER: "Oracle 通用数值类型，可表示整数或小数",
  NUMERIC: "高精度定点数，适合精确计算",
  NVARCHAR: "变长 Unicode 字符串，SQL Server 常用",
  NVARCHAR2: "Oracle 变长 Unicode 字符串",
  PATH: "路径几何对象，PostgreSQL 专用",
  POINT: "坐标点，空间位置数据",
  POLYGON: "多边形，适合区域边界",
  RAW: "原始二进制字节，Oracle 常用",
  REAL: "单精度浮点数",
  SERIAL: "自增整数，PostgreSQL 常用主键",
  SET: "集合枚举，可同时选择多个值",
  SMALLDATETIME: "低精度日期时间，SQL Server 兼容类型",
  SMALLINT: "小范围整数，节省存储空间",
  SMALLMONEY: "小范围货币金额类型",
  SMALLSERIAL: "小范围自增整数",
  SPARSEVEC: "稀疏向量，适合高维稀疏特征",
  SQL_VARIANT: "可存多种标量类型，SQL Server 专用",
  TEXT: "长文本，适合正文和备注",
  TIME: "时间，不含日期",
  TIMESTAMP: "时间戳/日期时间，适合记录变更时间",
  TIMESTAMPTZ: "带时区的时间戳",
  TIMETZ: "带时区的时间",
  TINYBLOB: "小型二进制对象",
  TINYINT: "超小范围整数，常用于状态位",
  TINYTEXT: "小型文本内容",
  TSQUERY: "全文检索查询表达式，PostgreSQL 专用",
  TSVECTOR: "全文检索索引向量，PostgreSQL 专用",
  UNIQUEIDENTIFIER: "GUID/UUID，SQL Server 常用唯一标识",
  UUID: "全局唯一标识，适合分布式主键",
  VARBINARY: "变长二进制数据",
  VARBIT: "变长位串，PostgreSQL 专用",
  VARCHAR: "变长字符串，最常用文本类型",
  VARCHAR2: "Oracle 变长字符串",
  VECTOR: "向量类型，适合 AI Embedding 检索",
  XML: "XML 文档数据",
  YEAR: "年份类型",
};

const COMMON_TYPE_ORDER = {
  [DB.GENERIC]: [
    "VARCHAR",
    "TEXT",
    "INTEGER",
    "INT",
    "BIGINT",
    "DECIMAL",
    "NUMERIC",
    "BOOLEAN",
    "DATE",
    "DATETIME",
    "TIMESTAMP",
    "JSON",
    "UUID",
    "CHAR",
    "REAL",
    "DOUBLE",
    "FLOAT",
    "BLOB",
    "ENUM",
    "SET",
  ],
  [DB.MYSQL]: [
    "VARCHAR",
    "INT",
    "BIGINT",
    "TINYINT",
    "DATETIME",
    "TIMESTAMP",
    "DATE",
    "TEXT",
    "DECIMAL",
    "DOUBLE",
    "FLOAT",
    "BOOLEAN",
    "JSON",
    "CHAR",
    "ENUM",
    "BLOB",
    "TIME",
    "YEAR",
  ],
  [DB.MARIADB]: [
    "VARCHAR",
    "INT",
    "BIGINT",
    "TINYINT",
    "DATETIME",
    "TIMESTAMP",
    "DATE",
    "TEXT",
    "DECIMAL",
    "DOUBLE",
    "FLOAT",
    "BOOLEAN",
    "JSON",
    "UUID",
    "CHAR",
    "ENUM",
    "BLOB",
  ],
  [DB.POSTGRES]: [
    "VARCHAR",
    "TEXT",
    "INTEGER",
    "BIGINT",
    "BOOLEAN",
    "TIMESTAMPTZ",
    "TIMESTAMP",
    "DATE",
    "NUMERIC",
    "JSONB",
    "UUID",
    "SERIAL",
    "BIGSERIAL",
    "SMALLINT",
    "DECIMAL",
    "TIME",
    "BYTEA",
    "JSON",
    "REAL",
    "DOUBLE PRECISION",
  ],
  [DB.SQLITE]: [
    "INTEGER",
    "TEXT",
    "REAL",
    "NUMERIC",
    "BLOB",
    "BOOLEAN",
    "DATE",
    "DATETIME",
    "JSON",
  ],
  [DB.MSSQL]: [
    "INT",
    "BIGINT",
    "NVARCHAR",
    "VARCHAR",
    "DATETIME2",
    "DATETIME",
    "BIT",
    "DECIMAL",
    "DATE",
    "UNIQUEIDENTIFIER",
    "VARBINARY",
    "XML",
    "TEXT",
    "FLOAT",
    "MONEY",
  ],
  [DB.ORACLESQL]: [
    "NUMBER",
    "VARCHAR2",
    "DATE",
    "TIMESTAMP",
    "CLOB",
    "BLOB",
    "CHAR",
    "NVARCHAR2",
    "RAW",
    "JSON",
    "BOOLEAN",
    "INTERVAL",
    "VECTOR",
  ],
};

const CATEGORY_ORDER = {
  integer: 100,
  decimal: 200,
  string: 300,
  date: 400,
  boolean: 500,
  document: 600,
  enum: 700,
  binary: 800,
  network: 900,
  geometry: 1000,
  search: 1100,
  vector: 1200,
  other: 1300,
  custom: 1400,
  enum_custom: 1500,
};

function inferCategory(type) {
  if (
    [
      "TINYINT",
      "SMALLINT",
      "MEDIUMINT",
      "INT",
      "INTEGER",
      "BIGINT",
      "SMALLSERIAL",
      "SERIAL",
      "BIGSERIAL",
    ].includes(type)
  ) {
    return "integer";
  }

  if (
    [
      "DECIMAL",
      "NUMERIC",
      "NUMBER",
      "FLOAT",
      "DOUBLE",
      "DOUBLE PRECISION",
      "REAL",
      "MONEY",
      "SMALLMONEY",
    ].includes(type)
  ) {
    return "decimal";
  }

  if (
    [
      "CHAR",
      "VARCHAR",
      "VARCHAR2",
      "NVARCHAR",
      "NVARCHAR2",
      "NCHAR",
      "TEXT",
      "NTEXT",
      "TINYTEXT",
      "MEDIUMTEXT",
      "LONGTEXT",
      "CLOB",
      "NCLOB",
      "LONG",
    ].includes(type)
  ) {
    return "string";
  }

  if (
    [
      "DATE",
      "TIME",
      "TIMETZ",
      "TIMESTAMP",
      "TIMESTAMPTZ",
      "DATETIME",
      "DATETIME2",
      "DATETIMEOFFSET",
      "SMALLDATETIME",
      "YEAR",
      "INTERVAL",
    ].includes(type)
  ) {
    return "date";
  }

  if (["BOOLEAN", "BIT"].includes(type)) {
    return "boolean";
  }

  if (["JSON", "JSONB", "XML", "SQL_VARIANT"].includes(type)) {
    return "document";
  }

  if (["ENUM", "SET"].includes(type)) {
    return "enum";
  }

  if (
    [
      "BINARY",
      "VARBINARY",
      "BLOB",
      "TINYBLOB",
      "MEDIUMBLOB",
      "LONGBLOB",
      "BFILE",
      "RAW",
      "IMAGE",
      "BYTEA",
      "VARBIT",
    ].includes(type)
  ) {
    return "binary";
  }

  if (
    [
      "UUID",
      "UNIQUEIDENTIFIER",
      "CIDR",
      "INET",
      "INET4",
      "INET6",
      "MACADDR",
      "MACADDR8",
    ].includes(type)
  ) {
    return "network";
  }

  if (
    [
      "GEOMETRY",
      "GEOMETRYCOLLECTION",
      "POINT",
      "LINESTRING",
      "LINE",
      "LSEG",
      "BOX",
      "PATH",
      "POLYGON",
      "MULTIPOINT",
      "MULTILINESTRING",
      "MULTIPOLYGON",
      "CIRCLE",
    ].includes(type)
  ) {
    return "geometry";
  }

  if (["TSVECTOR", "TSQUERY"].includes(type)) {
    return "search";
  }

  if (["VECTOR", "HALFVEC", "SPARSEVEC"].includes(type)) {
    return "vector";
  }

  return "other";
}

function getCommonRank(type, database) {
  const order = COMMON_TYPE_ORDER[database] || [];
  const index = order.indexOf(type);
  return index === -1 ? null : index;
}

function compareOptions(a, b) {
  if (a.rank !== b.rank) return a.rank - b.rank;
  return String(a.value).localeCompare(String(b.value), "en", {
    sensitivity: "base",
  });
}

function buildOption(value, note, rank, meta = {}) {
  return {
    label: value,
    value,
    note,
    rank,
    searchText: `${value} ${note || ""}`.toLowerCase(),
    ...meta,
  };
}

export function getChineseTypeNote(type) {
  return TYPE_NOTES[type] || "数据库字段类型";
}

export function buildTypeOptionList({
  database,
  builtinTypes,
  customTypes = [],
  enums = [],
  excludeCustomTypeName,
}) {
  const builtinOptions = Object.keys(builtinTypes)
    .map((type) => {
      const commonRank = getCommonRank(type, database);
      const category = inferCategory(type);
      const rank =
        commonRank !== null
          ? commonRank
          : CATEGORY_ORDER[category];

      return buildOption(type, getChineseTypeNote(type), rank, {
        kind: "builtin",
      });
    })
    .sort(compareOptions);

  const customOptions = customTypes
    .filter(
      (type) =>
        type.name &&
        type.name.toLowerCase() !== excludeCustomTypeName?.toLowerCase(),
    )
    .map((type, index) =>
      buildOption(
        type.name.toUpperCase(),
        "自定义复合类型",
        CATEGORY_ORDER.custom + index,
        { kind: "custom" },
      ),
    )
    .sort(compareOptions);

  const enumOptions = enums
    .filter((type) => type.name)
    .map((type, index) =>
      buildOption(
        type.name.toUpperCase(),
        "自定义枚举类型",
        CATEGORY_ORDER.enum_custom + index,
        { kind: "enum" },
      ),
    )
    .sort(compareOptions);

  return [...builtinOptions, ...customOptions, ...enumOptions];
}

export function filterTypeOption(input, option) {
  return option?.searchText?.includes(String(input).trim().toLowerCase());
}

export function renderTypeOptionItem({
  className,
  style,
  onClick,
  onMouseEnter,
  label,
  note,
}) {
  return (
    <div
      className={className}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <div className="px-4 py-2">
        <div className="leading-5 font-medium">{label}</div>
        <div className="mt-0.5 text-xs leading-4 text-zinc-500">{note}</div>
      </div>
    </div>
  );
}

export function renderSelectedTypeItem(option) {
  return option?.value || option?.label || "";
}
