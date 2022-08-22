//
//  QuestionItem.swift
//  Jep
//
//  Created by Anant Singh on 8/16/22.
//

import Foundation
import UIKit
import CoreLocation
import CoreData



struct question_item: Codable{
    var shownumber: Int
    var airdate: Date
    var category: String
    var value: Int
    var question: String
    var answer: Int
}

struct boardStruct: Codable{
    
}

func readLocalJSONFile(forName name: String) -> Data? {
    do {
        if let filePath = Bundle.main.path(forResource: name, ofType: "json") {
            let fileUrl = URL(fileURLWithPath: filePath)
            let data = try Data(contentsOf: fileUrl)
            return data
        }
    } catch {
        print("error: \(error)")
    }
    return nil
}

func parse(jsonData: Data) -> boardStruct? {
    do {
        let decodedData = try JSONDecoder().decode(question_item.self, from: jsonData)
        return decodedData
    } catch {
        print("error: \(error)")
    }
    return nil
}







