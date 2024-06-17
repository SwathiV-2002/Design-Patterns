// src/components/Module.ts
import { CourseComponent } from './CourseComponent';

export class Module implements CourseComponent {
    private children: CourseComponent[] = [];

    constructor(private title: string) {}

    add(component: CourseComponent): void {
        this.children.push(component);
    }

    remove(component: CourseComponent): void {
        const index = this.children.indexOf(component);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    display(indentation: number): void {
        console.log(`${" ".repeat(indentation)}Module: ${this.title}`);
        this.children.forEach((child) => child.display(indentation + 2));
    }
}
