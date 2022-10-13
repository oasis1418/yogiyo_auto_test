import yaml from 'js-yaml';
import fs from 'fs';

class XPathElement {
    private type: string;
    private name: string;
    private xpath: string;

    constructor(type: string, name: string, xpath: string) {
        this.type = type;
        this.name = name;
        this.xpath = xpath;
    }

    public getType(): string {
        return this.type;
    }

    public getName(): string {
        return this.name;
    }

    public getXPath(): string {
        return this.xpath;
    }
}

interface XPath {
    name: string;
    xPath: string;
    xPathEnd: string;
}

interface XPathRoot {
    xPaths: {
        types: { [key: string]: XPath[] }[];
    };
}

class XPathService {
    private elementMap: Map<string, XPathElement[]>;

    constructor() {
        this.elementMap = new Map();

        const xPathRoot = yaml.load(fs.readFileSync(`src/resource/xpath.yaml`, 'utf-8')) as XPathRoot;
        xPathRoot.xPaths.types.forEach((type) => {
            const elementType: string = Object.keys(type)[0];
            const elements: XPathElement[] = Object.values(type)[0].map((xPath) => {
                return new XPathElement(elementType, xPath.name, xPath.xPath);
            });
            this.elementMap.set(elementType, elements);
        });
    }

    public getXPathElement(type: string, name: string): XPathElement {
        const result = this.elementMap.get(type)?.find((element) => element.getName() === name);
        if (result) return result;
        throw new Error(`no Xpath in xpath.yaml : ${type} : ${name}`);
    }
}

const xPathService = new XPathService();

export default xPathService;
export { XPathElement };
