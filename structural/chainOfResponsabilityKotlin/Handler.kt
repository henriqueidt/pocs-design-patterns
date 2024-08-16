package structural.chainOfResponsabilityKotlin

interface Handler {
    fun analyze(document: Document) : Boolean?
}