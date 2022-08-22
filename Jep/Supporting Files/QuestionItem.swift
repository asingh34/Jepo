//
//  QuestionItem.swift
//  Jep
//
//  Created by Anant Singh on 8/16/22.
// Question Item data representation. Suck in/parse data file to gather needed questions.

import Foundation
import UIKit
import CoreLocation
import CoreData


struct question_item: Codable{
    
    var shownumber: Int 
    var airdate: String
    var category: String
    var round: String
    var value: String
    var question: String
    var answer: String
    
    
    
    private enum CodingKeys : String, CodingKey {
        case shownumber = "Show Number"
        case airdate = "Air Date"
        case category = "Category"
        case round = "Round"
        case value = "Value"
        case question = "Question"
        case answer = "Answer"
    }
    
    init(from decoder: Decoder) throws {
            let container = try decoder.container(keyedBy: CodingKeys.self)
            self.shownumber = try container.decode(Int.self, forKey: .shownumber)
            self.airdate = try container.decode(String.self, forKey: .airdate)
            self.category = try container.decode(String.self, forKey: .category)
            self.round = try container.decode(String.self, forKey: .round)
            self.value = try container.decode(String.self, forKey: .value)
            self.question = try container.decode(String.self, forKey: .question)

            do {
                answer = try container.decode(String.self, forKey: .answer)
            } catch DecodingError.typeMismatch {
                answer = try String(container.decode(Int.self, forKey: .answer))
            }
        }
}













