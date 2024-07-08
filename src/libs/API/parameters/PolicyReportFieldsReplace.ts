type PolicyReportFieldsReplace = {
    policyID: string;
    /**
     * Stringified JSON object with type of following structure:
     * Array<string>
     */
    reportFields: string;
};

export default PolicyReportFieldsReplace;
