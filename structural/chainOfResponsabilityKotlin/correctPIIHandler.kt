package structural.chainOfResponsabilityKotlin

import java.time.Period
import java.time.temporal.ChronoUnit
import java.util.*

class correctPIIHandler: Handler {
    private var nextHandler: Handler? = null

    override fun analyze(document: Document): Boolean? {
        if (!isAdult(document.dateOfBirth)) {
            println("Application rejected: Author is under 18")
            return false
        } else {
            return true
//            return nextHandler?.analyze(document)
        }
    }

    fun setNextHandler(handler: Handler) {
        nextHandler = handler
    }

    fun isAdult(dateOfBirth: Date): Boolean {
        val today = Date()
        val age = ChronoUnit.YEARS.between(dateOfBirth.toInstant(), today.toInstant())
        return age >= 18
    }
}