import { client, type Config, type NamedInputEvent, type ValidationConfig, type Validator } from 'laravel-precognition'
export { client }
export interface Form<Data extends Record<string, unknown>> {
    processing: boolean
    validating: boolean
    errors: Partial<Record<keyof Data, string>>
    hasErrors: boolean
    touched(name: keyof Data): boolean
    touch(name: string | NamedInputEvent | Array<string>): Data & Form<Data>
    data: () => Data
    setData(data: Record<string, unknown>): Data & Form<Data>
    valid(name: keyof Data): boolean
    invalid(name: keyof Data): boolean
    validate(name?: (keyof Data | NamedInputEvent) | ValidationConfig, config?: ValidationConfig): Data & Form<Data>
    setErrors(errors: Partial<Record<keyof Data, string | string[]>>): Data & Form<Data>
    forgetError(string: keyof Data | NamedInputEvent): Data & Form<Data>
    setValidationTimeout(duration: number): Data & Form<Data>
    submit(config?: Config): Promise<unknown>
    reset(...keys: (keyof Partial<Data>)[]): Data & Form<Data>
    validateFiles(): Data & Form<Data>
    validator(): Validator
}
