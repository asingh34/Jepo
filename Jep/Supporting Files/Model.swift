//
//  Model.swift
//  Jep
//
//  Created by Anant Singh on 8/16/22.
//

import Foundation
import UIKit




class Model{
    
    
    var questionArr = [question_item]()
    var qStats: [String: Int] = [:]
    var boardArr=[[question_item]]()
    
    
    
    func loadQuestions()->[question_item]{
        let d = readLocalJSONFile(forName: "jeopardy")
        let q = parse(jsonData: d)
        return q
        
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

    func parse(jsonData: Data?)->[question_item]{
        do {
            let decodedData = try JSONDecoder().decode([question_item].self, from: jsonData!)
            return decodedData
        } catch {
            print("error: \(error)")
        }
        return []
    }
    
   
    
    func analyzeData(qarr: [question_item]?){
        for i in 0..<questionArr.count{
            let q = questionArr[i]
            if (qStats[q.category] == nil){
                qStats[q.category] = 1
            }else{
                qStats[q.category]!+=1
            }
        }
    }

    func initQuestions(){
        
    }
    
    func initBoard(){
        
        

        questionArr = loadQuestions()
        analyzeData(qarr: questionArr)
        initQuestions()
        print(qStats)
            
    }
    
}
