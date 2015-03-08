//
//  ViewController.swift
//  TempConverter
//
//  Created by Shaunak Vairagare on 3/8/15.
//  Copyright (c) 2015 Classroom. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var celsius: UITextField!
    @IBOutlet weak var fahrenheit: UITextField!
    @IBOutlet weak var kelvin: UITextField!
    
    var conv : MyConverter!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        conv = MyConverter()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func onCelsiusChanged(sender: UITextField) {
        fahrenheit.text =  "\(conv.convertToFarenite((sender.text as NSString).doubleValue))"
        fahrenheit.reloadInputViews()

        kelvin.text = "\(conv.convertCelsiusToKelvin((sender.text as NSString).doubleValue))"
        kelvin.reloadInputViews();
        
    }
    
    @IBAction func onFareniteChanged(sender: UITextField) {
        celsius.text =  "\(conv.convertToCelcius((sender.text as NSString).doubleValue))"
        celsius.reloadInputViews()
        
        kelvin.text = "\(conv.convertCelsiusToKelvin((celsius.text as NSString).doubleValue))"
        kelvin.reloadInputViews();
    }
    
    @IBAction func onKelvinChanged(sender: UITextField) {
        celsius.text =  "\(conv.convertKelvinToCelsius((sender.text as NSString).doubleValue))"
        celsius.reloadInputViews()
        
        fahrenheit.text =  "\(conv.convertToFarenite((celsius.text as NSString).doubleValue))"
        fahrenheit.reloadInputViews()
        
    }
    
}

