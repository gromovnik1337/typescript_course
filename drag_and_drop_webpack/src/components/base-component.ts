// Component Base Class
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    // Takes care of the general fetching and attachment of the components.
    // Exact implementations take care for the configuration and the rendering.
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor (
        templateId: string,
        hostElementId: string,
        insertAtStart: boolean,
        newElementId?: string
    ) {
        // Select elements.
        this.templateElement = document.getElementById(
            templateId
        )! as HTMLTemplateElement;
        this.hostElement = document.getElementById(hostElementId)! as T;

        // Import the content from the template.
        const importedNode = document.importNode(
            this.templateElement.content,
            true
        );
        this.element = importedNode.firstElementChild as U;
        if (newElementId) {
            this.element.id = newElementId;
        }

        this.attach(insertAtStart);
    }

    private attach(insertAtBeginning: boolean) {
        // This method attaches the element to the domain (dom), rendering it.
        this.hostElement.insertAdjacentElement(
            insertAtBeginning ? 'afterbegin' : 'beforeend',
            this.element
        );
    }

    abstract configure(): void;
    abstract renderContent(): void;
}